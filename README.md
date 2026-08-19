# ohtcoo portfolio

Static site. No build step, no dependencies.

- `index.html` — the whole page (fonts, thumbnails and logos are inlined)
- `clips/` — 33 clips + poster frames, referenced by relative path
- `_source-data.js` — readable copy of the data inlined into index.html

## Deploy

GitHub Pages: push, then Settings → Pages → deploy from branch.
Netlify: drag the folder in, or point it at the repo with no build command.

## Editing

Project text, roles and clip captions live in one `GAMES` array at the top of the
`<script>` block in `index.html`. The General work gallery is the `GENERAL` array
below it. Both are mirrored in `_source-data.js`.

Fields per project: `clips` (local footage), `showcase` (YouTube videos shown in
the panel), `video` (the one featured in the Videos section), `links`, `did`.

## Clips

1280px wide, 60fps cap, H.264 CRF 22, faststart. Largest file is 14.9 MB, under
GitHub's 100 MB per-file limit; the folder totals ~117 MB.

To add one: put `clips/<key>.mp4` and `clips/<key>.jpg` in place, then add
`{k:'<key>', t:'caption'}` to that project's `clips` array (or to `GENERAL`).
