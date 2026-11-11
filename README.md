# Marcelo Matias — Portfolio

Personal portfolio for Marcelo Matias, Junior DevOps Engineer and Full-Stack Developer. The site is a static Vue 3 application designed for GitHub Pages.

Live content is taken from the resume and from public GitHub repositories under [MatiasLance](https://github.com/MatiasLance). Nothing in the project list is invented.

## Technologies

- Vue 3
- TypeScript
- Vite
- Tailwind CSS
- Docker / Docker Compose
- Nginx
- GitHub Actions / GitHub Pages

No backend is required. Routing is handled with in-page section anchors rather than Vue Router, which avoids GitHub Pages 404 issues on refresh.

## Local development (Docker Compose)

Docker Compose is the primary way to run this project.

### Production image (Nginx)

This is the same path used for a containerized preview: Vite builds the static site, then Nginx serves it.

```bash
docker compose up --build -d
```

Open [http://localhost:8080](http://localhost:8080).

```bash
docker compose logs -f
docker compose down
```

Copy `.env.example` to `.env` if you want to change the host port (`PORT=8080`) or the Vite build args.

### Development with hot reload

```bash
docker compose -f docker-compose.dev.yml up
```

Open [http://localhost:5173](http://localhost:5173). Source files are mounted into the container, so edits refresh in the browser.

### Without Docker

Node.js 20 or later is recommended.

```bash
npm install
npm run dev
```

The development server is typically available at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. The build also writes:

- `404.html` — a copy of `index.html` for GitHub Pages fallback
- `.nojekyll` — prevents GitHub Pages from processing the build with Jekyll
- `robots.txt` and `sitemap.xml` — generated from `VITE_SITE_URL` and `VITE_BASE`

## GitHub Pages deployment

GitHub Pages still hosts the static `dist` output. Docker Compose is for local preview and any container host; it is not required for Pages.

GitHub Pages is free on a **public** repository. A private repository on the free plan shows an upgrade prompt instead. You do not need GitHub Pro if the repo is public.

The repository includes `.github/workflows/deploy.yml`. After you push this project to GitHub:

1. Create a repository under [MatiasLance](https://github.com/MatiasLance). Two common names:
   - `MatiasLance.github.io` — user site at `https://matiaslance.github.io/`
   - `portfolio` — project site at `https://matiaslance.github.io/portfolio/`
2. In the repository, open **Settings → Pages**.
3. Set the source to **GitHub Actions**.
4. Push to `main`. The workflow builds the site and deploys the `dist` folder.

### Base path

The Vite `base` defaults to `./`, which works for both a user site and a project site.

If you prefer an absolute base for a project site, add a repository variable:

| Variable | Example | When to use |
| --- | --- | --- |
| `VITE_BASE` | `/portfolio/` | Project site with an absolute base |
| `VITE_SITE_URL` | `https://matiaslance.github.io` | Canonical URL used in `sitemap.xml` |

Repository variables live under **Settings → Secrets and variables → Actions → Variables**.

If you add Vue Router later, use `createWebHashHistory()` or keep the generated `404.html` fallback. `createWebHistory()` alone will 404 on GitHub Pages when a path is refreshed.

### First-time checklist

- [ ] Repository is **public** (Settings → General → Danger Zone → Change visibility). Pages on a private repo requires a paid plan.
- [ ] Pages source is set to GitHub Actions
- [ ] `index.html` canonical / Open Graph URLs match the deployed address
- [ ] `src/data/portfolio.ts` email, GitHub, and LinkedIn links are current

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── docker-compose.yml      # Production preview (Nginx)
├── docker-compose.dev.yml  # Vite with hot reload
├── Dockerfile
├── nginx/default.conf
├── public/                 # Static files copied into dist
├── src/
│   ├── components/
│   │   ├── layout/         # Header, footer, theme toggle
│   │   ├── sections/       # Page sections
│   │   └── ui/             # Shared presentational pieces
│   ├── composables/        # Theme and active-section state
│   ├── data/portfolio.ts   # All portfolio content
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── index.html
├── tailwind.config.js
└── vite.config.ts
```

## Updating portfolio content

Edit `src/data/portfolio.ts`. That file owns:

- Name, title, summary, and about copy
- Navigation labels
- Email, GitHub, and LinkedIn
- Skill groups
- Experience
- Projects and repository links
- Infrastructure section copy
- Highlight figures (only values that appear on the resume)

After changing content, review the page with `docker compose -f docker-compose.dev.yml up` or `npm run dev`. Rebuild the Nginx image with `docker compose up --build` after you want to confirm the production output. Do not add companies, projects, or technologies that are not on the resume or in a public repository.

## Configuring personal links

In `src/data/portfolio.ts`:

```ts
export const profile = {
  email: 'marcelomatias.0198@gmail.com',
  // ...
}

export const social = [
  { label: 'GitHub', href: 'https://github.com/MatiasLance' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcelo-matias-38618a274/' },
  { label: 'Email', href: 'mailto:marcelomatias.0198@gmail.com' },
]
```

Also update the canonical and Open Graph URLs in `index.html` once the GitHub Pages address is final.

## Theme

The default theme follows `prefers-color-scheme`. The header toggle stores an explicit choice in `localStorage` under the `theme` key. Both themes keep text, borders, and buttons readable. Animations respect `prefers-reduced-motion`.
