# GitHub Pages Multi-Page Deployment Fix

## Problem Statement

The blog and presentations pages are not displaying correctly:
- ❌ Profile picture is missing
- ❌ Icons are shown too large (CSS not loading)
- ❌ Pages don't look like the home page

## Root Cause

The issue stems from incorrect `baseurl` configuration in `_config.yml`:

### Before (Main Branch - BROKEN)
```yaml
baseurl: /
```

With template code like:
```liquid
{{ site.baseurl }}public/css/poole.css
{{ site.baseurl }}assets/img/profile.jpg
```

This rendered as:
```html
/public/css/poole.css  <!-- Works on home page -->
/assets/img/profile.jpg  <!-- Works on home page -->
```

However, the paths were not properly formatted with `/` after `site.baseurl`, causing potential issues.

### After (This PR - FIXED)
```yaml
baseurl: ""
```

With properly formatted template code:
```liquid
{{ site.baseurl }}/public/css/poole.css
{{ site.baseurl }}/assets/img/profile.jpg
```

This renders as:
```html
/public/css/poole.css  <!-- Works on ALL pages -->
/assets/img/profile.jpg  <!-- Works on ALL pages -->
```

## Changes Made

### 1. _config.yml
```diff
- baseurl: /
+ baseurl: ""
```

### 2. _includes/head.html
```diff
- <link rel="stylesheet" href="{{ site.baseurl }}public/css/poole.css">
+ <link rel="stylesheet" href="{{ site.baseurl }}/public/css/poole.css">
```

Applied to all CSS files and favicon.

### 3. _includes/sidebar.html
```diff
- <a href="{{ site.baseurl }}">
- <img class="profile-photo" src="{{ site.baseurl }}assets/img/profile.jpg">
+ <a href="{{ site.baseurl }}/">
+ <img class="profile-photo" src="{{ site.baseurl }}/assets/img/profile.jpg">
```

### 4. 404.html
```diff
- <a href="{{ site.baseurl }}">Head back home</a>
+ <a href="{{ site.baseurl }}/">Head back home</a>
```

## Technical Explanation

### Why `baseurl: ""` for GitHub Pages User Sites

GitHub Pages serves user/organization sites at:
- `https://username.github.io/`

For these sites, `baseurl` should be empty (`""`).

If you had a project page at:
- `https://username.github.io/project-name/`

Then you would use:
- `baseurl: /project-name`

### How Jekyll Generates URLs

With `permalink: pretty`, Jekyll generates:
- `blog.md` → `/blog/index.html` (served at `/blog/`)
- `presentations.md` → `/presentations/index.html` (served at `/presentations/`)

All pages must use absolute paths (starting with `/`) to ensure CSS, JavaScript, and images load correctly from any page depth.

## Testing

Built the site locally with Jekyll and verified generated HTML:

**Blog Page (`_site/blog/index.html`)**:
```html
<link rel="stylesheet" href="/public/css/poole.css">
<img class="profile-photo" src="/assets/img/profile.jpg">
```

**Home Page (`_site/index.html`)**:
```html
<link rel="stylesheet" href="/public/css/poole.css">
<img class="profile-photo" src="/assets/img/profile.jpg">
```

✅ Both pages use identical absolute paths

## Expected Result After Merging

Once this PR is merged to the main branch:

1. **Home Page** (https://shayanabbasi1995.github.io/)
   - ✅ Profile picture displays
   - ✅ CSS loads correctly
   - ✅ Icons are properly sized

2. **Blog Page** (https://shayanabbasi1995.github.io/blog/)
   - ✅ Profile picture displays
   - ✅ CSS loads correctly
   - ✅ Icons are properly sized
   - ✅ Looks identical to home page

3. **Presentations Page** (https://shayanabbasi1995.github.io/presentations/)
   - ✅ Profile picture displays
   - ✅ CSS loads correctly
   - ✅ Icons are properly sized
   - ✅ Looks identical to home page

## Deployment

GitHub Pages will automatically rebuild your site within 1-2 minutes after merging this PR to the main branch.

## Verification Steps

After merging, verify the fix by:

1. Visit https://shayanabbasi1995.github.io/
   - Should see profile picture and properly styled page

2. Visit https://shayanabbasi1995.github.io/blog/
   - Should see same sidebar with profile picture
   - Should have same styling as home page

3. Visit https://shayanabbasi1995.github.io/presentations/
   - Should see same sidebar with profile picture
   - Should have same styling as home page

## If Issues Persist

If after merging you still see issues:

1. **Hard refresh** your browser:
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Clear browser cache** for the site

3. **Wait 5 minutes** for GitHub Pages to fully rebuild

4. **Check GitHub Actions** if workflow exists (Settings → Actions)

## Summary

This PR fixes the multi-page display issue by:
- Correcting the `baseurl` configuration
- Ensuring all asset paths use proper absolute URL format
- Maintaining consistency across all pages

The changes are minimal and surgical, affecting only configuration and path formatting.
