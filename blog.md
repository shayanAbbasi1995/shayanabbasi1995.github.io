---
layout: page
title: Blog
nav_order: 1
---

I write on [Medium](https://medium.com/@abbasi.shayan1995) and [LinkedIn](https://www.linkedin.com/in/shay-abbasi-b11b99b3/).

## Medium

<div id="medium-posts" data-medium-handle="abbasi.shayan1995">Loading posts&hellip;</div>

## LinkedIn

<ul class="medium-posts-list">
{% assign linkedin_posts = site.data.linkedin_posts | sort: "date" | reverse %}
{% for post in linkedin_posts %}
  <li>
    <a href="{{ post.url }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
    <span class="medium-post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
  </li>
{% endfor %}
</ul>

<script src="public/js/medium-posts.js"></script>
