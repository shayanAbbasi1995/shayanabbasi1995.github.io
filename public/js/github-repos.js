// Portfolio page enhancements, inspired by imfunniee/gitfolio:
//  1. Fills each .repo-card's footer with live GitHub stats (language, stars,
//     forks, last push) from the public GitHub REST API.
//  2. Draws a last-year contribution heatmap from
//     github-contributions-api.jogruber.de (GitHub itself has no CORS-enabled
//     endpoint for the contribution calendar).
// Both fail quietly: the curated card content is static and stays readable.
(function () {
  // Colours from GitHub's linguist for the languages likely to show up here.
  var LANG_COLORS = {
    Python: '#3572A5', R: '#198CE7', 'Jupyter Notebook': '#DA5B0B',
    JavaScript: '#f1e05a', HTML: '#e34c26', TeX: '#3D6117', Shell: '#89e051'
  };

  function relativeDate(iso) {
    var days = Math.round((Date.now() - new Date(iso)) / 86400000);
    if (days < 1) return 'today';
    if (days < 2) return 'yesterday';
    if (days < 31) return days + ' days ago';
    var months = Math.round(days / 30);
    if (months < 12) return months + (months === 1 ? ' month ago' : ' months ago');
    var years = Math.round(days / 365);
    return years + (years === 1 ? ' year ago' : ' years ago');
  }

  function metaItem(className, text, title) {
    var span = document.createElement('span');
    span.className = className;
    span.textContent = text;
    if (title) span.title = title;
    return span;
  }

  // --- 1. Repo stats -------------------------------------------------------
  document.querySelectorAll('.repo-card[data-repo]').forEach(function (card) {
    var meta = card.querySelector('.repo-meta');
    fetch('https://api.github.com/repos/' + card.getAttribute('data-repo'))
      .then(function (r) {
        if (!r.ok) throw new Error('GitHub API ' + r.status);
        return r.json();
      })
      .then(function (repo) {
        if (repo.language) {
          var lang = metaItem('repo-lang', repo.language);
          lang.style.setProperty('--lang', LANG_COLORS[repo.language] || '#999');
          meta.appendChild(lang);
        }
        meta.appendChild(metaItem('repo-stars', '★ ' + repo.stargazers_count, 'Stars'));
        meta.appendChild(metaItem('repo-forks', '⑂ ' + repo.forks_count, 'Forks'));
        meta.appendChild(metaItem('repo-updated', 'Updated ' + relativeDate(repo.pushed_at),
          new Date(repo.pushed_at).toLocaleDateString()));
      })
      .catch(function (err) {
        console.error('Repo stats unavailable:', err);
      });
  });

  // --- 2. Contribution heatmap --------------------------------------------
  var box = document.getElementById('gh-activity');
  if (!box) return;
  var user = box.getAttribute('data-user');
  var summary = box.querySelector('.gh-activity-summary');

  fetch('https://github-contributions-api.jogruber.de/v4/' + encodeURIComponent(user) + '?y=last')
    .then(function (r) {
      if (!r.ok) throw new Error('contributions API ' + r.status);
      return r.json();
    })
    .then(function (data) {
      var days = data.contributions || [];
      if (!days.length) throw new Error('no contribution data');

      var grid = document.createElement('div');
      grid.className = 'gh-grid';
      grid.setAttribute('role', 'img');
      grid.setAttribute('aria-label', data.total.lastYear + ' contributions in the last year');

      // Pad the first column so rows line up with weekdays (Sun at top).
      var offset = new Date(days[0].date + 'T00:00:00').getDay();
      for (var p = 0; p < offset; p++) {
        var pad = document.createElement('span');
        pad.className = 'gh-cell gh-pad';
        grid.appendChild(pad);
      }

      days.forEach(function (d, i) {
        var cell = document.createElement('span');
        cell.className = 'gh-cell';
        cell.setAttribute('data-level', d.level);
        cell.title = d.count + (d.count === 1 ? ' contribution on ' : ' contributions on ') + d.date;
        // Staggered fade-in, column by column.
        cell.style.animationDelay = Math.floor((i + offset) / 7) * 12 + 'ms';
        grid.appendChild(cell);
      });

      summary.innerHTML = '';
      var link = document.createElement('a');
      link.href = 'https://github.com/' + user;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = data.total.lastYear + ' contributions';
      summary.appendChild(link);
      summary.appendChild(document.createTextNode(' in the last year'));

      var scroller = document.createElement('div');
      scroller.className = 'gh-scroll';
      scroller.appendChild(grid);
      box.appendChild(scroller);
      // Show the most recent weeks first on narrow screens.
      scroller.scrollLeft = scroller.scrollWidth;
    })
    .catch(function (err) {
      console.error('Contribution calendar unavailable:', err);
      summary.innerHTML = 'See my activity on <a href="https://github.com/' + user +
        '" target="_blank" rel="noopener">GitHub</a>.';
    });
})();
