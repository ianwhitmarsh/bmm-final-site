# BMM Site Final

The Big Mammoth Media marketing site (bigmammothmedia-website.vercel.app): plain static HTML, CSS and JavaScript, no build step.

## What's in here

| Path | What it is |
|---|---|
| `*.html` | Main pages: home (`index.html`), about, web design, social media management, podcasting, content sessions, works, contact, blogs, careers, privacy policy, Tulsa social media landing page |
| `works/` | The project case studies |
| `blogs/` | The blog posts |
| `careers/` | Job listings |
| `assets/style.css` | All site styles, including the mobile layout |
| `assets/script.js` | Shared header and footer, home page website slideshow, FAQ accordions, scroll effects |
| `img/` | Every photo and screenshot, compressed to WebP. `img/t/` holds small versions for cards and lists, `img/blog/` holds blog cover images |
| `showcase/` | Screenshots used in the home page website slideshow |
| `real-estate.html` | Real estate page: showcase, pricing, booking form (not connected to payments or a calendar yet) |
| `listing-sample.html` | Sample of the branded listing link included with Content Kits (hidden from search engines) |
| `assets/real-estate-media.js` | Every photo, video and graphic on the two real estate pages. Change a `src` here to swap media |
| `img/real-estate/` | Real estate photos (WebP) and vertical videos (`video/`, 540x960 MP4) |

## How it goes live

Pushing to `main` publishes the site. The **Publish to GitHub Pages** workflow copies `main` to the `gh-pages` branch, GitHub Pages serves it at ianwhitmarsh.github.io/bmm-final-site, and the `bigmammothmedia-website` project on Vercel forwards bigmammothmedia-website.vercel.app to it. Changes are live within a minute or two.

Keep the repo public: GitHub Pages on a free account only serves public repos.

## Adding a blog post

1. Copy any file in `blogs/` and change the title, description, date, cover image and article text.
2. Add a card for it at the top of the grid in `blogs.html` (copy an existing `blog-card-wrap`).
3. Optionally swap it into the three cards in the Insights section of `index.html`.

## Images

New images go in `img/` as WebP. Keep photos under about 1600px wide; anything shown in a card should also get a 640px copy in `img/t/`. The **Compress site images** workflow (Actions tab, Run workflow) converts any images still linked from Framer.

## Updating styles or scripts

Pages load `/assets/style.css?v=...` and `/assets/script.js?v=...`. After changing either file, bump the `v=` value in every page (a find-and-replace across the repo) so visitors' browsers fetch the new version instead of a cached one.

## Local preview

Run any static server from the repo root, for example `npx serve .`
