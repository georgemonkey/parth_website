# parthamradkar.com

free of dependecsdfcvies

## project-add

1. Drop images/videos into `assets/`, named `<id>-whatever.jpg`
   (keep photos under ~1 MB — resize with `sips -Z 1800 file.jpg`).
2. Open [js/projects.js](js/projects.js), copy the TEMPLATE from the top
   comment, paste it at the top of the `PROJECTS` list, fill it in.

## Structure

```
index.html        home (shell — content rendered from data)
project.html      project page template (?p=<id>)
js/projects.js    project data lives here
js/main.js        home renderer
js/project.js     project page renderer
js/gallery.js     lightbox
css/              styles
assets/           media (assets_originals/ = uncompressed backups, not deployed)
```
