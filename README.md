# parthamradkar.com

Personal portfolio. Pure static HTML/CSS/JS — no build step, no dependencies.

## Adding a project (the only thing you ever do)

1. Drop images/videos into `assets/`, named `<id>-whatever.jpg`
   (keep photos under ~1 MB — resize with `sips -Z 1800 file.jpg`).
2. Open [js/projects.js](js/projects.js), copy the TEMPLATE from the top
   comment, paste it at the top of the `PROJECTS` list, fill it in.

That's it. The site automatically generates:

- the card in the home page grid
- the project page at `project.html?p=<id>`
- gallery + lightbox, features, specs, dev timeline (empty sections hide)
- cross-links wherever the id is listed in another project's `related`

Only `id` and `title` are required. Set `featured: true` on one project
for the big homepage card.

## Structure

```
index.html        home (shell — content rendered from data)
project.html      project page template (?p=<id>)
js/projects.js    ← ALL project data lives here
js/main.js        home renderer
js/project.js     project page renderer
js/gallery.js     lightbox
css/              styles
assets/           media (assets_originals/ = uncompressed backups, not deployed)
```

## Preview locally

```
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploying

See [CLOUDFLARE-MIGRATION.md](CLOUDFLARE-MIGRATION.md). Once set up,
`git push` = deployed.
