# Mandira De Silva - Computer Science Portfolio

A modern, responsive, and accessible personal portfolio website built for **Mandira De Silva**, recent Computer Science Graduate from the **University of the West of England (UWE)** with Second Class Upper Division (2:1) Honours.

Designed specifically to target roles in:
- **Junior Software Engineer**
- **Web Developer / Full-Stack Developer**
- **Front-End Developer**

---

## 🌟 Features

- **Developer Aesthetic**: Modern dark mode by default with subtle neon glow accents, clean glassmorphism cards, and smooth micro-interactions.
- **Theme Switcher**: One-click toggle between Dark and Light modes with `localStorage` persistence and automatic system preference detection.
- **Project Showcase with Dynamic Filters**: Easily filter projects by category (*All*, *Full Stack*, *Web & Frontend*, *Systems & CS*).
- **Personalized Academic Section**: Dedicated showcase for UWE degree (2:1) and core computer science coursework (Algorithms, Data Structures, OOP, Database Systems, etc.).
- **Interactive Contact Features**:
  - One-click copy email button with real-time toast feedback.
  - Interactive direct message contact form opening your pre-configured mail client.
  - Direct links to GitHub (`mandirads`) and LinkedIn (`mandiradesilva3`).
- **Zero Build Dependencies**: Pure modern HTML5, CSS3, and Vanilla JavaScript. Fast loading and runs in any modern browser without npm dependencies.

---

## 🚀 How to Run Locally

### Option 1: Open Directly in Browser
Simply double-click `index.html` or right-click `index.html` and choose **Open With > Google Chrome** (or Safari / Firefox).

### Option 2: Local HTTP Server (Recommended)
You can run a lightweight local server using Python or Node:

**Using Python:**
```bash
python3 -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

**Using Node (npx):**
```bash
npx serve .
```

---

## 📝 Customizing and Adding Projects

The project cards are organized in `index.html` under `<div class="projects-grid" id="projectsGrid">`.

### Adding a New Project:
Copy and paste this template inside `#projectsGrid` in `index.html`:

```html
<article class="project-card" data-category="fullstack">
  <div class="project-card-banner">
    <span class="project-type-badge">Full Stack</span>
    <span class="project-status-badge in-dev">Completed</span>
  </div>
  <div class="project-card-body">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">
      A concise summary of what problem this project solves and the architecture you used.
    </p>
    
    <div class="project-highlights">
      <div class="highlight-bullet">
        <span class="bullet-dot"></span>
        <span>Key technical feature (e.g. JWT authentication, concurrency, or DB indexing).</span>
      </div>
      <div class="highlight-bullet">
        <span class="bullet-dot"></span>
        <span>Impact or performance metric (e.g. 50% faster queries, mobile responsiveness).</span>
      </div>
    </div>

    <div class="project-tech-stack">
      <span class="tech-tag">React</span>
      <span class="tech-tag">Node.js</span>
      <span class="tech-tag">PostgreSQL</span>
    </div>
  </div>
  <div class="project-card-footer">
    <a href="https://github.com/mandirads/your-repo-name" target="_blank" rel="noopener noreferrer" class="project-action-btn">
      <span>GitHub Repository</span>
    </a>
    <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer" class="project-action-btn primary">
      <span>Live Demo</span>
    </a>
  </div>
</article>
```

> **Categories available for filtering**: `data-category="fullstack"`, `data-category="frontend"`, or `data-category="systems"`.

---

## 📄 Adding Your Resume (PDF)

1. Put your PDF resume into this folder, named `resume.pdf`.
2. In `index.html`, find the nav button or hero buttons and link them directly:
   ```html
   <a href="resume.pdf" target="_blank" class="btn btn-outline btn-sm">Download Resume</a>
   ```

---

## 🌐 How to Deploy for Free (in 2 minutes)

### Deploy to GitHub Pages:
1. Create a new repository on your GitHub account (`https://github.com/mandirads/mandirads.github.io` or `https://github.com/mandirads/portfolio`).
2. Push this folder's code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/mandirads/your-repo-name.git
   git push -u origin main
   ```
3. Go to **Repository Settings > Pages**, select the `main` branch, and click **Save**.
4. Your website will be live at `https://mandirads.github.io`!

---

## 💡 Setting as Active Workspace
To make editing seamless inside Antigravity, set this project directory as your active workspace:
`/Users/mandira/.gemini/antigravity/scratch/cs-portfolio`
