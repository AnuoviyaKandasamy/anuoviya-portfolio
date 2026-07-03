# Anuoviya Kandasamy — Portfolio Website

A premium, recruiter-focused personal portfolio for **Anuoviya Kandasamy**, Software Engineer & Java Developer (Zoho School for Graduate Studies graduate). Dark navy corporate theme with a cyan accent, glassmorphism cards, and a Java-editor-styled hero — built with plain HTML, CSS, and vanilla JavaScript so it deploys straight to GitHub Pages with zero build step.

## ✨ Features

- Dark navy + white + cyan corporate theme with glassmorphism cards
- Animated hero: rotating role typing effect + a self-typing Java code window
- Sticky, scroll-aware navigation with a mobile hamburger menu
- Scroll-reveal animations and an animated top scroll-progress bar
- Animated counters (LeetCode problems, repos, projects) and animated skill bars
- Skills, Experience, Projects, Achievements, Education and Contact sections, all populated from real content
- Fully responsive (desktop → tablet → mobile)
- Semantic HTML with SEO meta tags and Open Graph tags
- No frameworks — just HTML, CSS and vanilla JS, plus Font Awesome for icons

## 📁 Folder Structure

```
portfolio/
├── index.html                          # Page structure and content
├── style.css                           # Design tokens, layout, animations, responsive rules
├── script.js                           # Typing effects, scroll reveal, counters, nav behavior
├── Anuoviya_Kandasamy_Resume.pdf
└── README.md
```

## 🚀 Getting Started

1. **Resume.** Your resume PDF is already included at
   `assets/resume/Anuoviya_Kandasamy_Resume.pdf` — the "Download Resume" buttons point to this exact path. Replace the file (keep the same name) any time you update your resume.

2. **Add your LinkedIn URL.** Open `script.js` and set the `LINKEDIN_URL` constant near the top of the file:
   ```js
   const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";
   ```
   Until this is set, the LinkedIn buttons give a gentle shake instead of navigating to a broken link.

3. **Preview locally.** Just open `index.html` in a browser, or serve it with any static server, e.g.:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```

## 🌐 Deploying to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `AnuoviyaKandasamy/portfolio`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then **Save**.
5. Your site will be live at `https://AnuoviyaKandasamy.github.io/portfolio/` within a few minutes.

## 🎨 Customizing

- **Colors / fonts / spacing:** all design tokens live at the top of `style.css` under `:root` (`--navy`, `--cyan`, `--blue`, `--font-display`, `--font-body`, `--font-mono`, etc.). Change a token once and it updates everywhere.
- **Skills:** edit the `skillGroups` array in `script.js` to add, remove, or re-level any skill card or progress bar.
- **Rotating hero roles:** edit the `roles` array in `script.js`.
- **Content (About, Experience, Projects, Achievements, Education, Contact):** edit directly in `index.html` — each section is clearly commented.

## 🛠 Built With

- HTML5 & semantic markup
- CSS3 (custom properties, Grid, Flexbox, backdrop-filter glassmorphism)
- Vanilla JavaScript (IntersectionObserver for scroll reveal, no dependencies)
- [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts — Space Grotesk (display), Inter (body), JetBrains Mono (code/labels)

---

Designed and developed by **Anuoviya Kandasamy**.
