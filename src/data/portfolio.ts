export type NavItem = {
  id: string
  label: string
}

export type SocialLink = {
  label: string
  href: string
}

export type SkillGroup = {
  id: string
  label: string
  items: string[]
}

export type ExperienceArea = {
  title: string
  points: string[]
}

export type ExperienceRole = {
  company: string
  title: string
  period: string
  location: string
  summary: string
  areas: ExperienceArea[]
  stack: string[]
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  status?: string
  description: string
  problem: string
  contributions: string[]
  stack: string[]
  links: ProjectLink[]
}

export type InfraItem = {
  title: string
  detail: string
}

export const site = {
  title: 'Marcelo Matias — Junior DevOps Engineer & Full-Stack Developer',
  description:
    'Junior DevOps Engineer and Full-Stack Developer in Davao City. Laravel, Nuxt.js, Docker, and Nginx. Builds and deploys production web applications.',
  url: 'https://matiaslance.github.io',
}

export const profile = {
  name: 'Marcelo Matias',
  shortName: 'MM',
  title: 'Junior DevOps Engineer & Full-Stack Developer',
  location: 'Davao City, Philippines',
  email: 'marcelomatias.0198@gmail.com',
  availability: 'Open to conversations about full-stack and infrastructure work.',
  summary:
    'I build and operate production web applications—Laravel and Nuxt.js on the product side, Docker, Nginx, and DigitalOcean on the infrastructure side. I care about repeatable releases, consistent environments, and systems that stay inexpensive to run.',
  about: [
    'I am a Junior DevOps Engineer and Full-Stack Developer based in Davao City, working at PageOne247 since 2022. Most of my work sits at the boundary between writing application code and keeping that code running in production.',
    'That usually means containerizing Laravel and Nuxt applications, placing them behind Nginx, and automating the release path with Bash. On one DigitalOcean Droplet I consolidated five projects through a reverse proxy and reduced hosting costs by 40%. Deployment scripts I wrote brought a typical release from thirty minutes down to ten.',
    'I also build custom WordPress features when a plugin is the wrong fit, and I spend time on MySQL when applications start to feel slow. I am currently deepening my Kubernetes knowledge and using AI-assisted tools as part of day-to-day development.',
  ],
  philosophy:
    'Keep infrastructure boring and observable. Automate the path from commit to production. Treat application code and the environment it runs in as one problem, not two.',
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: "St. Mary's College of Bansalan, Inc.",
    year: '2022',
  },
}

export const highlights = [
  { value: '4+', label: 'Years of production work' },
  { value: '40%', label: 'Hosting cost reduction' },
  { value: '30m → 10m', label: 'Typical release time' },
  { value: '5 → 1', label: 'Apps on one Droplet' },
]

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'contact', label: 'Contact' },
]

export const social: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/MatiasLance' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcelo-matias-38618a274/' },
  { label: 'Email', href: 'mailto:marcelomatias.0198@gmail.com' },
]

export const skills: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['Vue.js', 'Nuxt.js', 'JavaScript', 'WordPress (custom code, Elementor, Divi, WPBakery)'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Laravel (PHP)', 'RESTful APIs', 'SQL optimization'],
  },
  {
    id: 'devops',
    label: 'DevOps & infrastructure',
    items: ['Docker', 'Docker Compose', 'Nginx', 'DigitalOcean Droplets', 'Linux / Ubuntu', 'Bash', 'cPanel'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['MySQL'],
  },
  {
    id: 'cloud',
    label: 'Cloud, DNS & hosting',
    items: ['DigitalOcean', 'Cloudflare', 'Hostinger', 'HostGator', 'SSL'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'Bitbucket', 'ChatGPT', 'GitHub Copilot', 'Codex', 'Opencode', 'DeepSeek'],
  },
  {
    id: 'learning',
    label: 'Currently learning',
    items: ['Kubernetes'],
  },
]

export const experience: ExperienceRole[] = [
  {
    company: 'PageOne247',
    title: 'Junior DevOps & Full-Stack Developer',
    period: 'July 2022 — Present',
    location: 'Davao City, Philippines',
    summary:
      'I work across application development and production operations: Laravel and Nuxt.js services, WordPress customizations, and the Docker / Nginx / DigitalOcean stack they run on.',
    areas: [
      {
        title: 'Infrastructure and deployment',
        points: [
          'Containerized applications with Docker so development and production stay consistent.',
          'Consolidated five projects onto a single DigitalOcean Droplet using an Nginx reverse proxy, reducing hosting costs by 40%.',
          'Automated deployment workflows with Bash scripts, cutting a typical release from 30 minutes to 10 minutes.',
          'Researching Kubernetes approaches for scalability and fault tolerance.',
        ],
      },
      {
        title: 'Full-stack development',
        points: [
          'Developed and maintained Laravel and Nuxt.js applications with an emphasis on readable, maintainable code.',
          'Built custom WordPress features when standard plugins could not cover the business requirement.',
          'Optimized MySQL queries to improve application responsiveness.',
        ],
      },
      {
        title: 'Systems administration and networking',
        points: [
          'Managed DNS records and domain migrations with zero downtime.',
          'Configured SSL certificates and hardened cPanel and WordPress environments.',
          'Collaborated through Git and Bitbucket using structured branching.',
        ],
      },
    ],
    stack: ['Laravel', 'Nuxt.js', 'Vue.js', 'MySQL', 'Docker', 'Nginx', 'DigitalOcean', 'WordPress', 'Bash', 'Git'],
  },
]

export const projects: Project[] = [
  {
    name: 'DRUM HQ',
    description:
      'A Vue and PHP application where I focused on frontend quality, query performance, and search visibility.',
    problem:
      'The interface had maintainability issues and pages were slower than they needed to be for day-to-day use.',
    contributions: [
      'Improved UI and UX and resolved frontend bugs that were making the codebase harder to maintain.',
      'Optimized queries and frontend code, reducing page load time by 40%.',
      'Added SEO improvements through metadata configuration.',
    ],
    stack: ['Vue.js', 'PHP', 'MySQL', 'Docker', 'Nginx'],
    links: [
      { label: 'GitHub (compose)', href: 'https://github.com/MatiasLance/drum-hq' },
      { label: 'Frontend', href: 'https://github.com/MatiasLance/drum-hq-frontend' },
      { label: 'Backend', href: 'https://github.com/MatiasLance/drum-hq-backend' },
    ],
  },
  {
    name: 'TFW9S staging and production',
    description:
      'Staging and production deployment work for a Vue frontend and PHP backend, including a real-time waiting lounge feature.',
    problem:
      'A new real-time feature needed a staging environment before it could be released safely to production.',
    contributions: [
      'Provisioned a staging environment to validate the Waiting Lounge feature before production release.',
      'Implemented real-time data rendering with Socket.IO to improve user engagement.',
    ],
    stack: ['Vue.js', 'PHP', 'Socket.IO', 'Nginx'],
    links: [
      { label: 'Frontend', href: 'https://github.com/MatiasLance/tfw9s-frontend' },
      { label: 'Backend', href: 'https://github.com/MatiasLance/tfw9s-backend' },
    ],
  },
  {
    name: 'Muscle Prime infrastructure',
    description:
      'Application and infrastructure work on Muscle Prime, including payment verification and deployment communication.',
    problem:
      'Releases needed a clearer user-facing signal, and payments required a more reliable verification path.',
    contributions: [
      'Implemented a real-time version notification modal so users could see when a new deployment was available.',
      'Integrated a secure e-path payment system with real-time verification.',
      'Transitioning the project toward Kubernetes for improved scalability.',
    ],
    stack: ['Laravel', 'Nuxt.js', 'Docker', 'Kubernetes'],
    links: [],
  },
  {
    name: 'Client Project Tracker',
    description:
      'A public Vue and Laravel project tracker for digital agencies: create, update, filter, and delete client projects through a REST API and MySQL.',
    problem:
      'Project managers needed a focused tool for client work without standing up a heavier project-management suite.',
    contributions: [
      'Built a Vue 3 interface with search, status and priority filters, and sorting.',
      'Implemented a Laravel REST API with field-level validation and seeded demo data.',
      'Packaged frontend, backend, MySQL, and Nginx with Docker Compose using pinned images.',
    ],
    stack: ['Vue 3', 'Vite', 'Laravel', 'MySQL', 'Docker Compose', 'Nginx', 'TypeScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/MatiasLance/client-project-tracker' }],
  },
  {
    name: 'Finly Finance — Monday.com integration',
    description:
      'A custom API integration that keeps financial workflow data in sync with Monday.com.',
    problem:
      'Financial work depended on manual updates between systems, which slowed the team down.',
    contributions: [
      'Built a custom API integration to automate data synchronization and streamline financial workflows.',
    ],
    stack: ['RESTful APIs'],
    links: [],
  },
  {
    name: 'CRM platform',
    status: 'In progress',
    description:
      'An ongoing CRM built with Laravel, Docker Compose, and Nginx, with a REST API for client-server communication.',
    problem:
      'The team needed a dedicated client-management platform rather than stretching existing tools further.',
    contributions: [
      'Developing the CRM on Laravel with Docker Compose and Nginx.',
      'Implementing REST API integration for client-server communication.',
      'Using AI-assisted tools for debugging and feature delivery.',
    ],
    stack: ['Laravel', 'Docker Compose', 'Nginx', 'REST APIs'],
    links: [],
  },
]

export const infrastructure: {
  intro: string
  items: InfraItem[]
  currently: string
} = {
  intro:
    'Infrastructure work is not a side interest. It is part of how I ship Laravel and Vue applications: containers, reverse proxies, DNS, TLS, and the scripts that make a release repeatable.',
  items: [
    {
      title: 'Docker and Compose',
      detail:
        'I containerize applications so local development and production stay aligned. Client Project Tracker, for example, runs frontend, backend, MySQL, and Nginx from Compose with pinned image tags.',
    },
    {
      title: 'Nginx reverse proxy',
      detail:
        'I placed five projects behind one Nginx reverse proxy on a single DigitalOcean Droplet. That consolidation cut hosting costs by 40% without splitting each app onto its own server.',
    },
    {
      title: 'Deployment automation',
      detail:
        'Bash scripts handle the release path. The same work that used to take about 30 minutes now lands in about 10.',
    },
    {
      title: 'Linux server management',
      detail:
        'Day-to-day work includes Ubuntu servers, DigitalOcean Droplets, cPanel, and keeping WordPress environments patched and TLS-ready.',
    },
    {
      title: 'DNS and TLS',
      detail:
        'I manage DNS across Cloudflare, Hostinger, and HostGator, including zero-downtime domain migrations and SSL certificate setup.',
    },
    {
      title: 'Database operations',
      detail:
        'I operate MySQL in production and spend time on query work when application performance starts to slip.',
    },
  ],
  currently:
    'I am researching Kubernetes so the next step after a well-run Droplet is a more fault-tolerant layout. Muscle Prime is the first project I am moving in that direction.',
}

export const expertise = [
  {
    title: 'Application development',
    text: 'Laravel backends, Nuxt and Vue frontends, REST APIs, and custom WordPress work when a plugin is not enough.',
  },
  {
    title: 'Production operations',
    text: 'Docker, Nginx, DigitalOcean, Linux administration, DNS, and TLS—enough to take a service from laptop to a live host.',
  },
  {
    title: 'Release discipline',
    text: 'Staging environments, deployment scripts, and structured Git and Bitbucket branching so production is not the first place a change is tested.',
  },
]
