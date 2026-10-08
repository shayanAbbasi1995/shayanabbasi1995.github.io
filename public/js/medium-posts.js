// Fetches recent post titles from a Medium RSS feed and renders them as a
// linked list. Uses rss2json as a CORS proxy since Medium's feed endpoint
// does not send CORS headers for browser fetches.
(function () {
  var container = document.getElementById('medium-posts');
  if (!container) return;

  var handle = container.getAttribute('data-medium-handle');
  if (!handle) return;

  // rss2json caches each feed URL for a long time, so new posts could take
  // days to show up. Adding today's date (UTC) to the URL gives a fresh cache
  // entry once a day; Medium ignores the extra parameter.
  var today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  var feedUrl = 'https://medium.com/feed/@' + handle + '?t=' + today;
  var apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedUrl);
  var profileUrl = 'https://medium.com/@' + handle;

  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) throw new Error('rss2json request failed: ' + response.status);
      return response.json();
    })
    .then(function (data) {
      if (data.status !== 'ok' || !data.items || !data.items.length) {
        throw new Error('No posts returned');
      }

      var list = document.createElement('ul');
      list.className = 'medium-posts-list';

      data.items.forEach(function (post) {
        var item = document.createElement('li');

        var link = document.createElement('a');
        link.href = post.link;
        link.textContent = post.title;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        item.appendChild(link);

        var pubDate = new Date(post.pubDate);
        if (!isNaN(pubDate)) {
          var date = document.createElement('span');
          date.className = 'medium-post-date';
          date.textContent = pubDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          item.appendChild(date);
        }

        list.appendChild(item);
      });

      container.innerHTML = '';
      container.appendChild(list);
    })
    .catch(function (err) {
      container.innerHTML =
        '<p>Unable to load posts right now. View them directly on ' +
        '<a href="' + profileUrl + '" target="_blank" rel="noopener noreferrer">Medium</a>.</p>';
      console.error('Medium feed error:', err);
    });
})();
