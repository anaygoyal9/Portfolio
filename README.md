# Anay Goyal — Portfolio

A personal portfolio site built with React + Vite.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Building for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc).

## Editing content

Almost everything you'd want to change — your name, bio, skills, timeline, and
projects — lives in one place: **`src/data.js`**. Update the values there and
the whole site updates automatically.

To change colors or fonts, edit the CSS variables at the top of
**`src/index.css`**.

## Project structure

```
src/
  data.js          <- all your content lives here
  index.css        <- global styles & design tokens (colors, fonts)
  App.jsx          <- page layout, just stitches sections together
  components/
    Navbar.jsx      + Navbar.css
    Hero.jsx        + Hero.css       (intro + the animated growth-graph visual)
    About.jsx       + About.css
    Skills.jsx      + Skills.css
    Timeline.jsx    + Timeline.css
    Projects.jsx    + Projects.css
    Contact.jsx     + Contact.css
    Footer.jsx      + Footer.css
    Icons.jsx        (shared inline SVG icons)
public/
  Anay_Goyal_Resume.pdf   <- swap this file to update the Resume button
```

## Things worth doing next

- Swap the placeholder project links in `src/data.js` (`link: '...'`) for
  the real GitHub repo or live demo URLs for each project.
- Replace `public/Anay_Goyal_Resume.pdf` whenever you update your resume —
  the filename can stay the same so the Resume button keeps working.
