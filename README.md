# Jhon Leo Portfolio

This repository contains a static portfolio website built with HTML, CSS, and JavaScript.

## Project Structure

- `index.html` — main site page
- `Css files/` — stylesheets for layout, sections, and responsive design
- `Js Files/` — JavaScript for theme mode, navigation, and page interactions
- `Assets/` — images, icons, video, and resume PDF

## Publish to GitHub Pages

1. Commit your changes:
   ```bash
   git add index.html README.md .github/workflows/pages.yml
   git commit -m "Prepare site for GitHub Pages"
   ```
2. Push to `main`:
   ```bash
   git push origin main
   ```
3. Enable GitHub Pages in repository settings:
   - Go to `Settings` > `Pages`
   - Set source to `GitHub Actions / main`
   - Save

Once the workflow runs successfully, your site will be available at:

`https://jhonleorey68-hub.github.io/jhonleoWebPortfolio/`

## Local Preview

Open `index.html` in your browser or use a local server:

```bash
python -m http.server 8000
```

Then go to `http://localhost:8000`.
