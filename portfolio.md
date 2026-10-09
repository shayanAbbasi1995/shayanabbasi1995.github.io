---
layout: page
title: Portfolio
nav_order: 1
---

A selection of projects organized by domain. All code is available on [GitHub](https://github.com/shayanAbbasi1995).

<div class="repo-grid">
{% for p in site.data.projects %}
  <article class="repo-card reveal" data-repo="{{ p.repo }}">
    <p class="repo-domain">{{ p.domain }}</p>
    <h3 class="repo-title"><a href="https://github.com/{{ p.repo }}" target="_blank" rel="noopener">{{ p.title }}</a></h3>
    <p class="repo-desc">{{ p.description }}{% if p.page %} <a href="{{ p.page }}" target="_blank" rel="noopener">Project page &rarr;</a>{% endif %}</p>
    <ul class="repo-stack">
      {% for t in p.stack %}<li>{{ t }}</li>{% endfor %}
    </ul>
    <div class="repo-meta" aria-live="polite"></div>
  </article>
{% endfor %}
</div>

<h2 class="reveal">GitHub activity</h2>
<div id="gh-activity" class="gh-activity reveal" data-user="shayanAbbasi1995">
  <p class="gh-activity-summary">Loading contributions&hellip;</p>
</div>

<script src="public/js/github-repos.js" defer></script>
