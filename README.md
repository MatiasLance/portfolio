# Marcelo Matias — Portfolio

An executive portfolio for a full-stack and infrastructure engineer. The site positions production work as measurable business outcomes: lower hosting costs, faster releases, resilient platforms, and revenue-critical integrations.

Built with Nuxt 3 and deployed as a fully static site to GitHub Pages. No backend is required.

## Stack

- Nuxt 3 / Vue 3 with `<script setup lang="ts">`
- TypeScript with strict content contracts
- Tailwind CSS with a custom dark design system
- `lucide-vue-next` icons and custom inline SVG solution icons
- Plus Jakarta Sans + JetBrains Mono
- Nitro static generation
- Docker / Nginx for container hosting
- GitHub Actions / GitHub Pages for deployment

## Project structure

```text
app.vue                      Page shell, SEO metadata, Person JSON-LD
components/
  AppNavbar.vue              Sticky glass header, active section, mobile drawer
  HeroSection.vue            Outcome headline, dual CTAs, metrics strip
  SolutionsGrid.vue          Four engagement offers
  ProjectsShowcase.vue       Filterable case-study grid
  ProjectCard.vue            Browser-frame preview and outcome summary
  ProjectDetailDrawer.vue    Accessible case-study slide-over
  TrackRecordTimeline.vue    Role context and production milestones
  TechStackMatrix.vue        Grouped capability matrix
  ContactFooter.vue          Availability, direct email, inquiry form
  ui/                        Shared heading, icon, and copy-button primitives
composables/
  useActiveSection.ts        Scroll-spy for navigation
  useDialog.ts               Focus trap, scroll lock, inert background
data/portfolio.ts            All site copy, projects, metrics, and links
types/portfolio.ts           Strict interfaces for every content shape
assets/css/main.css          Tailwind layers and design-system primitives
public/                      Favicon, manifest, robots, sitemap
```

Content is fully decoupled from presentation. Components read from `data/portfolio.ts`; edit that file rather than hard-coding copy into templates.

## Local development

Node.js 22 or later is recommended.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Nuxt development server with hot reload |
| `npm run typecheck` | Vue and TypeScript checking |
| `npm run generate` | Static build in `.output/public` |
| `npm run preview` | Preview the generated site |
| `npm run build` | Nitro server build, if you later add a backend |

## Editing content

Open `data/portfolio.ts`. The main exports are:

- `site` — page title, description, canonical URL, social image
- `profile` — name, role, location, email, availability, social links
- `hero` — headline, value proposition, CTAs, partner snapshot
- `metrics` — the four proof points below the hero
- `solutions` — the four engagement offers
- `projectCategories` / `projects` — filters and full case studies
- `currentRole` / `achievements` — track-record content
- `techCategories` / `stackNote` — stack matrix content
- `contactScopes` — inquiry form scope options
- `sectionCopy` — headings and descriptions for every section

### Adding a case study

Add a `Project` object to `projects` with:

- a unique `id`
- a `category` matching one of `projectCategories`
- `challenge`, `solution`, and a quantified `impact`
- four `architecture` layers
- `deliverables`, `integrations`, `stack`, and `links`
- a `preview` object with `monogram`, `tone`, and `motif`

The card preview is rendered in CSS, so no screenshot asset is required. `tone` controls the accent palette (`blue`, `emerald`, `violet`, `amber`) and `motif` selects the mock interface (`dashboard`, `commerce`, `editorial`).

If you change the shape of the content, update `types/portfolio.ts` at the same time. The build runs with strict TypeScript.

## Contact form

The inquiry form validates on the client and prepares a `mailto:` draft containing the name, email, company, selected scope, and project context. It does not send data to a server.

To connect a real form backend, replace the `window.location.href = draftHref.value` line in `components/ContactFooter.vue` with a `$fetch` call to your endpoint. Keep the existing validation and success state. Update `profile.email` in `data/portfolio.ts` to change the destination address.

## Quality checks

```bash
npm run typecheck
npm run generate
npm run preview
```

The layout is designed and checked from 320px through 1440px and wider. It includes a skip link, visible focus states, labeled form fields, an accessible focus-trapped drawer, and reduced-motion support.

## Deployment

### GitHub Pages

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main` and can be triggered manually. It installs dependencies, runs `npm run generate`, and publishes `.output/public`.

In the repository settings:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Add repository variables if your URL differs from the defaults.

| Variable | Default | Use |
| --- | --- | --- |
| `NUXT_PUBLIC_SITE_URL` | `https://matiaslance.github.io` | Canonical URL, Open Graph, JSON-LD |
| `NUXT_APP_BASE_URL` | `/` | Set to `/<repo>/` for a project Pages site |

For a user site such as `https://matiaslance.github.io`, keep the base URL as `/`. For `https://<user>.github.io/<repo>/`, set `NUXT_APP_BASE_URL` to `/<repo>/`.

The generated output includes `.nojekyll` from `public/`, so GitHub Pages serves Nuxt's `_nuxt/` assets correctly.

### Docker

Build the static site and serve it with Nginx:

```bash
docker compose up --build -d
```

Open [http://localhost:8080](http://localhost:8080).

```bash
docker compose logs -f
docker compose down
```

Copy `.env.example` to `.env` to change the host port, base URL, or canonical site URL. Nginx caches `_nuxt/` assets immutably and falls back to `index.html` for anchor-based navigation.

For hot reload inside Docker:

```bash
docker compose -f docker-compose.dev.yml up
```

Open [http://localhost:3000](http://localhost:3000).

If a previous dependency install was interrupted and the dev container fails with `ENOTEMPTY` on `node_modules`, reset the dependency volume:

```bash
docker compose -f docker-compose.dev.yml down -v
docker compose -f docker-compose.dev.yml up -d
```

## SEO assets

- `public/favicon.svg` — MM monogram favicon
- `public/site.webmanifest` — install metadata and theme color
- `public/robots.txt` — crawl policy and sitemap location
- `public/sitemap.xml` — canonical page entry
- `app.vue` — `useSeoMeta`, canonical link, and Person structured data

If the production domain changes, update `NUXT_PUBLIC_SITE_URL`, `public/robots.txt`, and `public/sitemap.xml` together.
