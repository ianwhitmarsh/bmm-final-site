# BMM Site Final

The Big Mammoth Media marketing site (bigmammothmedia-website.vercel.app): plain static HTML, CSS and JavaScript, no build step.

## What's in here

| Path | What it is |
|---|---|
| `index.html` | Home page |
| `about.html`, `web-design.html`, `social-media-management.html`, `podcasting.html`, `content-sessions.html`, `works.html`, `contact.html` | Main pages |
| `assets/style.css` | All site styles, including the mobile layout (`Mobile pass` block at the end) |
| `assets/script.js` | Shared header and footer, home page website slideshow, FAQ accordions, scroll effects |
| `showcase/*.webp` | Screenshots used in the home page website slideshow |
| `vercel.json` | Clean URLs plus routes for the pages still served from their original Vercel projects |

## Pages served from other Vercel projects

The 23 project case studies (`/works/...`), the 22 blog posts (`/blogs/...`), `/blogs`, `/careers`, `/careers/facebook-(meta)-ads-manager`, `/privacy-policy` and `/tulsa-social-media-landing` are not in this repo. `vercel.json` forwards those URLs to the `bmm-works-*`, `bmm-blogs-*` and `bmm-main-*` projects on Vercel. Those pages still load `/assets/style.css` and `/assets/script.js` from this site, so they share the same header, footer and styling.

## Deploying

The live site is the `bigmammothmedia-website` project on Vercel. Right now the Vercel team is not linked to GitHub, so pushes here do not redeploy automatically. The live site serves `assets/` and `showcase/` from this repo through jsDelivr (`cdn.jsdelivr.net/gh/ianwhitmarsh/bmm-final-site@<commit>/...`), pinned to a specific commit. A change to a CSS, JS or image file goes live when that Vercel project is redeployed with the new commit in its routing.

To switch to automatic deploys, connect GitHub in Vercel (Account Settings, then Login Connections), import this repo as a project, and point the bigmammothmedia-website domain at it. Every push to `main` then goes live with no other steps.

To preview locally, run any static server from the repo root, for example `npx serve .`
