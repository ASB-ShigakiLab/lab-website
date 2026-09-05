# Shunsuke Shigaki (志垣俊介) Website

Personal research website for Shunsuke Shigaki, published via GitHub Pages.

## Structure

- `index.html` — Home
- `profile.html` — Profile (学歴・職歴・受賞歴 etc.)
- `research.html` — Research topics with figures and videos
- `publications.html` — Full publication list
- `links.html` — External links
- `assets/css/style.css` — Site styling
- `assets/images/` — Figures and portrait photo

## Local preview

Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploying updates

After editing any file:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages will redeploy automatically within a few minutes.
