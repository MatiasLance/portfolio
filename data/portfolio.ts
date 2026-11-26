import type {
  Achievement,
  ContactScope,
  CurrentRole,
  HeroContent,
  NavItem,
  Profile,
  Project,
  ProjectCategoryOption,
  SectionId,
  SectionIntro,
  SiteMeta,
  Solution,
  StackNote,
  TechCategory,
} from '~/types/portfolio'

export const site: SiteMeta = {
  title: 'Marcelo Matias — Full-Stack & Infrastructure Engineer',
  description:
    'Full-stack and infrastructure engineer building Laravel, Nuxt, and WordPress platforms that cut hosting costs, compress release cycles, and hold up in production.',
  url: 'https://matiaslance.github.io',
  ogImage: 'https://avatars.githubusercontent.com/u/193286894?v=4&s=400',
}

export const profile: Profile = {
  name: 'Marcelo Matias',
  initials: 'MM',
  role: 'Full-Stack & Infrastructure Engineer',
  location: 'Davao City, Philippines',
  timezone: 'GMT+8',
  email: 'marcelomatias.0198@gmail.com',
  summary:
    'I help teams ship faster, spend less, and scale without surprises. Laravel, Nuxt, and WordPress, backed by production-grade DevOps.',
  philosophy: 'Keep infrastructure boring and observable.',
  availability: {
    status: 'available',
    label: 'Available for select projects',
    detail: 'Booking engagements for the next quarter.',
  },
  responseTime: 'Within one business day',
  social: [
    { label: 'GitHub', handle: '@MatiasLance', href: 'https://github.com/MatiasLance' },
    {
      label: 'LinkedIn',
      handle: 'Marcelo Matias',
      href: 'https://www.linkedin.com/in/marcelo-matias-38618a274/',
    },
    { label: 'Email', handle: 'marcelomatias.0198@gmail.com', href: 'mailto:marcelomatias.0198@gmail.com' },
  ],
}

export const nav: NavItem[] = [
  { id: 'solutions', label: 'Solutions' },
  { id: 'work', label: 'Case Studies' },
  { id: 'track-record', label: 'Track Record' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

export const hero: HeroContent = {
  eyebrow: 'Independent technical partner',
  headline: 'Complex platforms.',
  headlineAccent: 'Measurable outcomes.',
  description:
    'I’m Marcelo Matias, a full-stack and infrastructure engineer. I build systems that ship faster, cost less, and hold up under production load from ambitious product requirements.',
  primaryCta: { label: 'Explore case studies', href: '#work' },
  secondaryCta: { label: 'Book a consultation', href: '#contact' },
  note: 'Currently engineering at PageOne247',
  snapshot: {
    label: 'Partner snapshot',
    rows: [
      { label: 'Focus', value: 'Product engineering + infrastructure' },
      { label: 'Stack', value: 'Laravel · Nuxt · Docker' },
      { label: 'Engagement', value: 'Remote · GMT+8' },
    ],
  },
}

export const metrics = [
  { value: '67%', label: 'Hosting cost reduction' },
  { value: '30→10m', label: 'Release cycle' },
  { value: '10→1', label: 'Projects on one stack' },
  { value: '4+ yrs', label: 'Production experience' },
]

export const sectionCopy: Record<SectionId, SectionIntro> = {
  solutions: {
    eyebrow: 'Solutions',
    title: 'Four ways I help teams ship better software.',
    description:
      'Engagements scoped around outcomes, not billable hours. Every build is intended to leave your team with a faster, more maintainable system.',
  },
  work: {
    eyebrow: 'Case studies',
    title: 'Production work, with the numbers attached.',
    description:
      'A selection of platforms I’ve engineered, optimized, and kept online. Open any case study for the architecture and delivery details.',
  },
  'track-record': {
    eyebrow: 'Track record',
    title: 'A pattern of production outcomes.',
    description:
      'The work behind the metrics: consolidating infrastructure, compressing release cycles, and hardening the systems businesses depend on.',
  },
  stack: {
    eyebrow: 'Technical stack',
    title: 'Deep enough to architect. Practical enough to ship.',
    description:
      'The tools I reach for in production. No arbitrary proficiency bars—just the stack behind the case studies.',
  },
  contact: {
    eyebrow: 'Start a project',
    title: 'Let’s build the next version of your platform.',
    description:
      'Tell me what you’re trying to ship, improve, or untangle. I’ll reply with a clear next step—usually within one business day.',
  },
}

export const solutions: Solution[] = [
  {
    id: 'custom-web-applications',
    title: 'Custom Web Applications',
    outcome: 'Software shaped around how your business actually operates.',
    description:
      'Laravel APIs and Nuxt frontends designed as one maintainable product—from database schema to deployment.',
    icon: 'application',
    deliverables: [
      'Product & architecture discovery',
      'Laravel / Nuxt delivery',
      'API & database design',
      'Automated release pipeline',
    ],
  },
  {
    id: 'ecommerce-payments',
    title: 'E-Commerce & Payment Systems',
    outcome: 'Checkout flows that convert—and hold up under load.',
    description:
      'WooCommerce and custom storefronts with secure payment integrations, clean order workflows, and speed built in.',
    icon: 'commerce',
    deliverables: [
      'WooCommerce engineering',
      'Payment gateway integration',
      'Order & inventory workflows',
      'Conversion-focused UX',
    ],
  },
  {
    id: 'cms-web-presence',
    title: 'High-Speed CMS & Web Presence',
    outcome: 'A web presence that loads fast, ranks well, and stays maintainable.',
    description:
      'Custom WordPress engineering and headless builds that replace plugin bloat with purposeful code.',
    icon: 'cms',
    deliverables: [
      'Custom themes & plugins',
      'Core Web Vitals tuning',
      'Headless WordPress + Nuxt',
      'Zero-downtime migrations',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    outcome: 'Infrastructure that costs less and releases faster.',
    description:
      'Containerized workloads, reverse-proxy routing, and automated delivery on infrastructure you can reason about.',
    icon: 'cloud',
    deliverables: [
      'Docker containerization',
      'Nginx & proxy routing',
      'Deployment automation',
      'Monitoring & hardening',
    ],
  },
]

export const projectCategories: ProjectCategoryOption[] = [
  { id: 'all', label: 'All work' },
  { id: 'web-apps', label: 'Web Apps' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'cms', label: 'CMS & Corporate' },
]

export const projects: Project[] = [
  {
    id: 'multi-site-fleet',
    name: 'Multi-Site Fleet Consolidation',
    client: 'PageOne247 · Multi-client',
    category: 'cms',
    status: 'Ongoing',
    summary:
      'Consolidated ten mixed production workloads onto one containerized DigitalOcean stack—without splitting apps across servers.',
    challenge:
      'Ten client projects lived across separate hosting accounts with inconsistent environments and manual releases, driving $1,200/month in spend and avoidable operational risk.',
    solution:
      'Containerized every Laravel, Nuxt, and WordPress workload with Docker Compose, routed them through Nginx Proxy Manager, and automated releases with Bash.',
    impact: { value: '67%', label: 'lower hosting spend' },
    deliverables: [
      'Dockerized multi-app runtime',
      'Nginx Proxy Manager routing',
      'Bash release automation',
      'SSL & DNS migration',
    ],
    architecture: [
      {
        label: 'Edge',
        detail: 'Cloudflare DNS and Nginx Proxy Manager route each domain with automated TLS.',
      },
      {
        label: 'Runtime',
        detail: 'Docker Compose stacks run Laravel, Nuxt, and WordPress workloads with pinned images.',
      },
      {
        label: 'Data',
        detail: 'MySQL runs per workload with isolated networks and scheduled backups.',
      },
      {
        label: 'Delivery',
        detail: 'Bash release scripts take a deployment from 30 minutes to 10.',
      },
    ],
    integrations: ['Cloudflare', "Let's Encrypt", 'DigitalOcean', 'Git'],
    stack: [
      'Docker',
      'Docker Compose',
      'Nginx Proxy Manager',
      'DigitalOcean',
      'WordPress',
      'Laravel',
      'Nuxt.js',
      'Bash',
    ],
    links: [{ label: 'PageOne247 platform', href: 'https://pageone247.com/' }],
    preview: { monogram: 'PO', tone: 'blue', motif: 'dashboard' },
  },
  {
    id: 'fighter-hive',
    name: 'Fighter Hive',
    client: 'Fighter Hive',
    category: 'web-apps',
    status: 'Live',
    summary:
      'A high-concurrency combat sports platform engineered for zero-downtime releases.',
    challenge:
      'Rapid feature releases and traffic spikes made restarts risky. The team needed reliable rollout health checks and a frontend that could keep up.',
    solution:
      'Engineered the Nuxt 2 + Laravel application and tuned Kubernetes liveness and readiness probes so deployments never took the platform offline.',
    impact: { value: '0', label: 'downtime releases' },
    deliverables: [
      'Nuxt 2 + Laravel delivery',
      'Kubernetes health probes',
      'Zero-downtime rollout plan',
      'Containerized runtime',
    ],
    architecture: [
      {
        label: 'Client',
        detail: 'Nuxt 2 frontend served with server-side rendering for fast first paint.',
      },
      {
        label: 'Application',
        detail: 'Laravel API handles authentication, content, and community workflows.',
      },
      {
        label: 'Orchestration',
        detail: 'Kubernetes deployments use custom liveness and readiness probes before traffic shifts.',
      },
      {
        label: 'Data',
        detail: 'MySQL backs application state with containerized backups.',
      },
    ],
    integrations: ['Kubernetes', 'Docker', 'MySQL', 'Git'],
    stack: ['Nuxt.js', 'Laravel', 'Kubernetes', 'Docker', 'MySQL'],
    links: [{ label: 'fighterhive.com', href: 'https://fighterhive.com/' }],
    preview: { monogram: 'FH', tone: 'emerald', motif: 'dashboard' },
  },
  {
    id: 'muscle-prime',
    name: 'Muscle Prime',
    client: 'Muscle Prime',
    category: 'web-apps',
    status: 'Live',
    summary:
      'An e-commerce and fitness platform with real-time payment verification and a path to Kubernetes.',
    challenge:
      'The platform needed trustworthy live payment confirmation, safe update prompts during releases, and infrastructure that could scale with demand.',
    solution:
      'Integrated e-path payments with live verification, shipped real-time version notifications, and started the runtime migration to Kubernetes.',
    impact: { value: 'Real-time', label: 'payment verification' },
    deliverables: [
      'e-path payment integration',
      'Live transaction verification',
      'Version update notifications',
      'Kubernetes migration',
    ],
    architecture: [
      {
        label: 'Storefront',
        detail: 'PHP application and backend API serve products, accounts, and checkout.',
      },
      {
        label: 'Payments',
        detail: 'e-path gateway integration verifies transactions in real time before orders complete.',
      },
      {
        label: 'Delivery',
        detail: 'Version notification modals keep active sessions aligned during releases.',
      },
      {
        label: 'Infrastructure',
        detail: 'Docker today, with Kubernetes adopted for fault tolerance and scale.',
      },
    ],
    integrations: ['e-path', 'Docker', 'Kubernetes', 'Backend API'],
    stack: ['PHP', 'Docker', 'Kubernetes', 'Payment Integration', 'Backend API'],
    links: [{ label: 'muscleprime.ai', href: 'https://muscleprime.ai/' }],
    preview: { monogram: 'MP', tone: 'violet', motif: 'commerce' },
  },
  {
    id: 'grandpas-dairy',
    name: "Grandpa's Dairy",
    client: "Grandpa's Dairy",
    category: 'ecommerce',
    status: 'Live',
    summary: 'A secure, scalable WooCommerce catalog for a farm-fresh dairy brand.',
    challenge:
      'A family-run producer needed a branded ordering experience, straightforward category management, and secure transactions without a heavy platform.',
    solution:
      'Built custom product workflows, tuned WooCommerce performance, and hardened SSL and DNS management for reliable checkout.',
    impact: { value: 'SSL', label: 'hardened checkout' },
    deliverables: [
      'Custom product workflows',
      'WooCommerce optimization',
      'SSL & DNS hardening',
      'Brand-led storefront',
    ],
    architecture: [
      {
        label: 'Edge',
        detail: 'Cloudflare manages DNS and TLS for a secure, resilient storefront.',
      },
      {
        label: 'Commerce',
        detail: 'WordPress and WooCommerce handle catalog, orders, and product categories.',
      },
      {
        label: 'Data',
        detail: 'MySQL stores product, customer, and order records.',
      },
      {
        label: 'Operations',
        detail: 'Managed deployment keeps plugins, certificates, and backups current.',
      },
    ],
    integrations: ['Cloudflare', 'WooCommerce', 'MySQL'],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Cloudflare'],
    links: [{ label: 'grandpasdairy.au', href: 'https://grandpasdairy.au/' }],
    preview: { monogram: 'GD', tone: 'amber', motif: 'commerce' },
  },
  {
    id: 'final-whistle',
    name: 'The Final Whistle',
    client: 'The Final Whistle',
    category: 'ecommerce',
    status: 'Live',
    summary: 'Sports e-commerce with live engagement features shipped safely through staging.',
    challenge:
      'New interactive features risked production incidents and latency during peak match-day traffic.',
    solution:
      'Provisioned dedicated staging to validate the Waiting Lounge experience, then implemented Socket.IO real-time rendering for live engagement.',
    impact: { value: 'Live', label: 'match-day engagement' },
    deliverables: [
      'Staging validation workflow',
      'Socket.IO real-time features',
      'Interactive engagement UX',
      'Release safety checks',
    ],
    architecture: [
      {
        label: 'Client',
        detail: 'Vue.js storefront renders live match-day experiences.',
      },
      {
        label: 'Real time',
        detail: 'Socket.IO streams updates without page refreshes.',
      },
      {
        label: 'Release',
        detail: 'Dedicated staging validates Waiting Lounge features before production.',
      },
      {
        label: 'Commerce',
        detail: 'Storefront and checkout run alongside live engagement surfaces.',
      },
    ],
    integrations: ['Socket.IO', 'Staging environments', 'Vue.js'],
    stack: ['Vue.js', 'Socket.IO', 'Staging Environments', 'Real-Time Data'],
    links: [{ label: 'tfw9s.com.au', href: 'https://tfw9s.com.au/' }],
    preview: { monogram: 'FW', tone: 'blue', motif: 'commerce' },
  },
  {
    id: 'drum-hq',
    name: 'The Drum HQ',
    client: 'The Drum HQ',
    category: 'ecommerce',
    status: 'Live',
    summary: 'A premium drumming community and store, rebuilt for speed.',
    challenge:
      'Slow page loads and fragmented frontend components were costing engagement and conversions.',
    solution:
      'Refined the UI, resolved frontend defects, optimized database queries, and cut page load times by 40%.',
    impact: { value: '40%', label: 'faster page loads' },
    deliverables: [
      'UI/UX refinement',
      'Frontend defect cleanup',
      'Query optimization',
      'SEO metadata',
    ],
    architecture: [
      {
        label: 'Frontend',
        detail: 'Vue.js components rebuilt into a consistent, responsive interface.',
      },
      {
        label: 'Application',
        detail: 'PHP application serves store and community content.',
      },
      {
        label: 'Data',
        detail: 'MySQL query optimization removed the largest page-load bottlenecks.',
      },
      {
        label: 'Discovery',
        detail: 'SEO metadata and semantic structure improve search visibility.',
      },
    ],
    integrations: ['MySQL', 'SEO tooling'],
    stack: ['Vue.js', 'PHP', 'MySQL', 'SEO', 'Performance Optimization'],
    links: [{ label: 'thedrumhq.com.au', href: 'https://thedrumhq.com.au/' }],
    preview: { monogram: 'DH', tone: 'emerald', motif: 'commerce' },
  },
  {
    id: 'plumbing-express',
    name: 'Plumbing Express Solutions',
    client: 'Plumbing Express Solutions',
    category: 'cms',
    status: 'Live',
    summary: 'A fast, always-on local service site engineered for lead capture.',
    challenge:
      'The business needed a dependable 24/7 presence, local SEO structure, and zero-downtime hosting.',
    solution:
      'Engineered a custom WordPress layout, optimized Core Web Vitals, and configured secure server deployment.',
    impact: { value: '24/7', label: 'lead capture' },
    deliverables: [
      'Custom WordPress layout',
      'Core Web Vitals tuning',
      'Secure server deployment',
      'Local SEO structure',
    ],
    architecture: [
      {
        label: 'Edge',
        detail: 'Nginx serves cached pages with TLS configured at the server.',
      },
      {
        label: 'CMS',
        detail: 'Custom WordPress templates keep service pages easy to update.',
      },
      {
        label: 'Performance',
        detail: 'Core Web Vitals tuning prioritizes fast mobile loads.',
      },
      {
        label: 'Hosting',
        detail: 'DigitalOcean deployment keeps the site available around the clock.',
      },
    ],
    integrations: ['DigitalOcean', 'Nginx', 'WordPress'],
    stack: ['WordPress', 'PHP', 'CSS3', 'DigitalOcean', 'Nginx'],
    links: [
      { label: 'plumbingexpresssolutions.com', href: 'https://plumbingexpresssolutions.com/' },
    ],
    preview: { monogram: 'PE', tone: 'amber', motif: 'editorial' },
  },
  {
    id: 'blistik',
    name: 'Blistik Ads & Digital Tech',
    client: 'Blistik',
    category: 'cms',
    status: 'Live',
    summary: 'A digital agency platform with custom layouts—no page-builder bloat.',
    challenge:
      'The brand needed high-end interactive UI without relying on heavy builder plugins or fragile custom markup.',
    solution:
      'Developed a custom WordPress theme, integrated responsive components, and tuned asset delivery for fast loading.',
    impact: { value: '0', label: 'page-builder plugins' },
    deliverables: [
      'Custom WordPress theme',
      'Responsive UI components',
      'Asset performance tuning',
      'Clean custom code',
    ],
    architecture: [
      {
        label: 'Frontend',
        detail: 'Custom theme templates with responsive, interactive components.',
      },
      {
        label: 'CMS',
        detail: 'WordPress provides editorial control without page-builder dependency.',
      },
      {
        label: 'Assets',
        detail: 'Tuned delivery keeps scripts and styles lightweight.',
      },
      {
        label: 'Delivery',
        detail: 'Custom PHP replaces plugin bloat with maintainable code.',
      },
    ],
    integrations: ['WordPress', 'Custom PHP'],
    stack: ['WordPress', 'Custom PHP', 'JavaScript', 'Tailwind/CSS'],
    links: [{ label: 'blistik.com', href: 'https://blistik.com/' }],
    preview: { monogram: 'BL', tone: 'violet', motif: 'editorial' },
  },
  {
    id: 'pageone-portal',
    name: 'PageOne247 Corporate Portal',
    client: 'PageOne247',
    category: 'cms',
    status: 'Live',
    summary: 'The agency’s corporate hub, running on the same consolidated container stack.',
    challenge:
      'Multiple containerized services needed unified routing, security, and coordinated releases.',
    solution:
      'Centralized deployment behind Nginx Proxy Manager and standardized the container runtime across the agency’s services.',
    impact: { value: '1', label: 'routing layer' },
    deliverables: [
      'Unified proxy routing',
      'Containerized deployment',
      'SSL coordination',
      'Release standardization',
    ],
    architecture: [
      {
        label: 'Edge',
        detail: 'Nginx Proxy Manager provides one routing layer for agency services.',
      },
      {
        label: 'Runtime',
        detail: 'Docker Compose standardizes application environments.',
      },
      {
        label: 'Security',
        detail: 'TLS and DNS changes are coordinated centrally.',
      },
      {
        label: 'Delivery',
        detail: 'Shared release conventions keep client deployments predictable.',
      },
    ],
    integrations: ['Docker', 'Nginx Proxy Manager', 'DigitalOcean'],
    stack: ['WordPress', 'Docker', 'Nginx Proxy Manager', 'DigitalOcean'],
    links: [{ label: 'pageone247.com', href: 'https://pageone247.com/' }],
    preview: { monogram: 'P1', tone: 'blue', motif: 'editorial' },
  },
  {
    id: 'enterprise-clients',
    name: 'Enterprise Client Solutions',
    client: 'Multi-client portfolio',
    category: 'cms',
    status: 'Live',
    summary:
      'Custom-coded WordPress deployments, directories, and performance-tuned regional sites.',
    challenge:
      'Client sites faced speed degradation, plugin bloat, and fragmented security across different hosting providers.',
    solution:
      'Executed zero-downtime migrations, cleaned custom PHP codebases, hardened cPanel and WordPress, and automated SSL.',
    impact: { value: '0', label: 'downtime migrations' },
    deliverables: [
      'Zero-downtime migrations',
      'PHP codebase cleanup',
      'Security hardening',
      'Automated SSL',
    ],
    architecture: [
      {
        label: 'Migration',
        detail: 'DNS and hosting moves staged to avoid downtime.',
      },
      {
        label: 'Application',
        detail: 'Legacy PHP cleaned and right-sized for each client.',
      },
      {
        label: 'Security',
        detail: 'cPanel and WordPress hardening closes common exposure paths.',
      },
      {
        label: 'TLS',
        detail: 'SSL issuance and renewal automated across hosts.',
      },
    ],
    integrations: ['cPanel', 'Cloudflare', 'MySQL', "Let's Encrypt"],
    stack: ['WordPress', 'PHP', 'MySQL', 'cPanel', 'SSL / DNS Management'],
    links: [
      { label: 'databasy.io', href: 'https://databasy.io/' },
      { label: 'glitteratiperformanceco.com', href: 'https://glitteratiperformanceco.com/' },
      { label: 'princeig.com.au', href: 'https://princeig.com.au/' },
      { label: 'globalspec.com.au', href: 'https://globalspec.com.au/' },
    ],
    preview: { monogram: 'EC', tone: 'emerald', motif: 'editorial' },
  },
]

export const currentRole: CurrentRole = {
  company: 'PageOne247',
  title: 'Full-Stack & Infrastructure Engineer',
  period: '2022 — Present',
  location: 'Davao City, Philippines',
  focus: 'Product engineering + infrastructure',
  principle: 'Application code and the environment it runs in are one problem.',
}

export const achievements: Achievement[] = [
  {
    id: 'foundation',
    phase: '2022 — Present',
    title: 'Joined PageOne247 across product and operations',
    org: 'PageOne247',
    summary:
      'Began shipping Laravel, Nuxt, and WordPress systems while owning the infrastructure they run on.',
    icon: 'foundation',
  },
  {
    id: 'cost-reduction',
    phase: 'Infrastructure',
    title: 'Consolidated ten production workloads',
    summary:
      'Moved mixed client projects onto one containerized DigitalOcean stack with Nginx Proxy Manager and automated TLS.',
    metric: { value: '67%', label: 'lower hosting spend' },
    icon: 'cost',
  },
  {
    id: 'release-velocity',
    phase: 'Delivery',
    title: 'Compressed the release cycle',
    summary:
      'Replaced manual deployment steps with Bash release scripts for custom applications and WordPress deployments.',
    metric: { value: '30→10m', label: 'deployment time' },
    icon: 'velocity',
  },
  {
    id: 'zero-downtime',
    phase: 'Reliability',
    title: 'Engineered zero-downtime Kubernetes rollouts',
    summary:
      'Added custom liveness and readiness probes to Fighter Hive so releases could ship without interrupting traffic.',
    metric: { value: '0', label: 'downtime releases' },
    icon: 'reliability',
  },
  {
    id: 'payments',
    phase: 'Payments',
    title: 'Shipped real-time payment verification',
    summary:
      'Integrated e-path payments with live transaction confirmation on Muscle Prime, alongside safer version-update prompts.',
    metric: { value: 'Live', label: 'transaction checks' },
    icon: 'payments',
  },
  {
    id: 'security',
    phase: 'Security',
    title: 'Hardened SSL and DNS across mixed hosts',
    summary:
      'Managed zero-downtime DNS migrations and SSL security for cPanel and WordPress environments.',
    metric: { value: '0', label: 'downtime migrations' },
    icon: 'security',
  },
  {
    id: 'performance',
    phase: 'Performance',
    title: 'Cut page load times by 40%',
    summary:
      'Rebuilt fragmented frontend components and optimized MySQL queries on The Drum HQ to improve engagement.',
    metric: { value: '40%', label: 'faster loads' },
    icon: 'performance',
  },
]

export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Interfaces that stay fast as they grow.',
    icon: 'frontend',
    items: ['Nuxt.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Core Web Vitals'],
  },
  {
    id: 'backend',
    label: 'Backend & Data',
    description: 'APIs and schemas built for real workloads.',
    icon: 'backend',
    items: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'SQL Optimization', 'Socket.IO'],
  },
  {
    id: 'cloud',
    label: 'DevOps & Cloud',
    description: 'Boring, observable infrastructure.',
    icon: 'cloud',
    items: [
      'Docker',
      'Docker Compose',
      'Nginx',
      'Nginx Proxy Manager',
      'DigitalOcean',
      'Linux',
      'Bash',
      'Cloudflare',
      'Kubernetes (learning)',
    ],
  },
  {
    id: 'payments',
    label: 'Payments & Analytics',
    description: 'Revenue paths, measured end to end.',
    icon: 'payments',
    items: [
      'Payment Gateways',
      'e-path Integration',
      'WooCommerce',
      'Real-time Verification',
      'SSL / TLS',
      'Conversion Tracking',
    ],
  },
]

export const stackNote: StackNote = {
  label: 'Currently deepening',
  items: ['Kubernetes', 'AI-assisted development'],
}

export const contactScopes: ContactScope[] = [
  { id: 'web-app', label: 'Web App', hint: 'Custom platform or product' },
  { id: 'ecommerce', label: 'E-Commerce', hint: 'Storefront or payments' },
  { id: 'devops', label: 'DevOps / Audit', hint: 'Infrastructure & performance' },
  { id: 'wordpress', label: 'WordPress', hint: 'CMS build or rescue' },
]
