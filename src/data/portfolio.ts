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

export type BusinessSolution = {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const site = {
  title: 'Marcelo Matias — DevOps Engineer | Full-Stack & WordPress Engineer',
  description:
    'DevOps Engineer and Full-Stack & WordPress Engineer in Davao City. Laravel, Nuxt.js, Vue.js, WordPress, Docker, and Nginx. Building scalable custom applications and high-performance WordPress ecosystems with 67% infrastructure cost reduction.',
  url: 'https://matiaslance.github.io',
}

export const profile = {
  name: 'Marcelo Matias',
  shortName: 'MM',
  title: 'DevOps Engineer | Full-Stack & WordPress Engineer',
  location: 'Davao City, Philippines',
  email: 'marcelomatias.0198@gmail.com',
  availability: 'Open to conversations about full-stack, WordPress, and infrastructure work.',
  summary:
    'Versatile DevOps Engineer and Full-Stack Web Developer with 4+ years of experience engineering scalable custom web apps and high-performance WordPress ecosystems. Proven expertise in Laravel, Nuxt.js, Docker, Nginx, and custom CMS architecture, with a track record of automating deployment workflows and cutting hosting costs by 67% (from $1,200 to $400/month). Adept at bridging development and operations to deliver high-performance systems, with expanding hands-on knowledge in Kubernetes and AI-assisted development.',
  about: [
    'I am a DevOps Engineer and Full-Stack & WordPress Engineer based in Davao City, working at PageOne247 since 2022. My work sits at the intersection of custom web application development (Laravel, Nuxt.js, Vue.js) and enterprise WordPress engineering — building both from the ground up and optimizing existing ecosystems.',
    'On the infrastructure side, I containerize applications with Docker, orchestrate them behind Nginx Proxy Manager on DigitalOcean Droplets, and automate releases with Bash — consolidating 10 projects (custom apps and WordPress sites) onto optimized infrastructure and reducing hosting costs by 67% (from $1,200 to $400/month). Deployment scripts cut release time from 30 minutes to 10.',
    'On the WordPress side, I engineer custom PHP solutions when plugins fall short — advanced theme/plugin development, Elementor/Divi/WPBakery optimization, Core Web Vitals tuning, secure payment gateway integrations, and headless WordPress with Nuxt.js frontends. I treat WordPress as a first-class application platform, not a blogging tool.',
    'I am currently deepening my Kubernetes knowledge and integrating AI-assisted tools (Cursor, DeepSeek, GitHub Copilot, Opencode) into daily development workflows.',
  ],
  philosophy:
    'Keep infrastructure boring and observable. Automate the path from commit to production. Treat application code and the environment it runs in as one problem — whether it\'s a custom Laravel API or a WordPress multisite fleet.',
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: "St. Mary's College of Bansalan, Inc.",
    year: '2022',
  },
}

export const highlights = [
  { value: '4+', label: 'Years of production work' },
  { value: '67%', label: 'Hosting cost reduction' },
  { value: '30m → 10m', label: 'Typical release time' },
  { value: '10 → 1', label: 'Projects consolidated' },
]

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'business-solutions', label: 'Business Solutions' },
  { id: 'work', label: 'Work' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'contact', label: 'Contact' },
]

export const social: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/MatiasLance' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcelo-matias-38618a274/' },
  { label: 'Email', href: 'mailto:marcelomatias.0198@gmail.com' },
]

export const skills = [
  {
    id: 'custom-apps',
    label: 'Custom Web Applications',
    items: ['Laravel (PHP)', 'Nuxt.js', 'Vue.js', 'RESTful APIs', 'MySQL', 'SQL Optimization'],
  },
  {
    id: 'devops',
    label: 'DevOps & Infrastructure',
    items: ['Docker', 'Docker Compose', 'Nginx', 'Nginx Proxy Manager (NPM)', 'DigitalOcean', 'Linux', 'Kubernetes (Learning)'],
  },
  {
    id: 'wordpress',
    label: 'WordPress & CMS Engineering',
    items: [
      'Custom PHP Coding',
      'Advanced Theme/Plugin Development',
      'Elementor / Divi / WPBakery Optimization',
      'Core Web Vitals & Speed Tuning',
    ],
  },
  {
    id: 'tools-ai',
    label: 'Tools & AI Development',
    items: ['Git', 'Bitbucket', 'Cloudflare DNS', 'SSL Implementation', 'Cursor', 'DeepSeek', 'ChatGPT', 'GitHub Copilot'],
  },
]

export const experience: ExperienceRole[] = [
  {
    company: 'PageOne247',
    title: 'Junior DevOps & Full-Stack Developer',
    period: '07/2022 - Present',
    location: 'Davao City, Philippines',
    summary:
      'I work across application development and production operations: Laravel and Nuxt.js services, WordPress customizations, and the Docker / Nginx / DigitalOcean stack they run on.',
    areas: [
      {
        title: 'Infrastructure and deployment',
        points: [
          'Containerized production and development environments using Docker to ensure absolute system consistency.',
          'Consolidated 10 projects (custom web applications and WordPress sites) across optimized DigitalOcean Droplets using Docker Compose and Nginx Proxy Manager (NPM), reducing monthly infrastructure costs by 67% (from $1,200 to $400/month).',
          'Streamlined release cycles by automating deployment workflows with custom Bash scripts, cutting deployment time from 30 to 10 minutes.',
          'Evaluated and integrated Kubernetes strategies to establish future-proof scalability and enhanced fault tolerance.',
        ],
      },
      {
        title: 'Full-stack development',
        points: [
          'Developed and maintained clean Laravel and Nuxt.js applications, building custom WordPress functionality beyond standard plugins.',
          'Optimized MySQL queries to boost application responsiveness.',
        ],
      },
      {
        title: 'Systems administration and networking',
        points: [
          'Managed zero-downtime DNS migrations and cPanel/WordPress SSL security.',
        ],
      },
    ],
    stack: ['Laravel', 'Nuxt.js', 'Vue.js', 'MySQL', 'Docker', 'Docker Compose', 'Nginx', 'Nginx Proxy Manager', 'DigitalOcean', 'WordPress', 'Bash', 'Git', 'Kubernetes'],
  },
]

export const projects: Project[] = [
  {
    name: 'CRM System Development',
    status: 'In progress',
    description:
      'Developing a scalable CRM platform built with Laravel, Docker Compose, and Nginx, featuring RESTful API integration and AI-assisted debugging workflows.',
    problem:
      'The team needed a dedicated client-management platform rather than stretching existing tools further.',
    contributions: [
      'Developing the CRM on Laravel with Docker Compose and Nginx.',
      'Implementing REST API integration for client-server communication.',
      'Using AI-assisted tools for debugging and feature delivery.',
    ],
    stack: ['Laravel', 'Docker Compose', 'Nginx', 'REST API', 'AI Development Tools'],
    links: [],
  },
  {
    name: 'TFW9S Staging & Production Deployment',
    status: 'Featured',
    description:
      'Provisioned staging environments to validate "Waiting Lounge" feature prior to production release and implemented real-time data rendering using Socket.IO.',
    problem:
      'A new real-time feature needed a staging environment before it could be released safely to production.',
    contributions: [
      'Provisioned a staging environment to validate the Waiting Lounge feature before production release.',
      'Implemented real-time data rendering with Socket.IO to improve user engagement.',
    ],
    stack: ['Vue.js', 'Socket.IO', 'Staging', 'Real-Time Data'],
    links: [
      { label: 'Frontend', href: 'https://github.com/MatiasLance/tfw9s-frontend' },
      { label: 'Backend', href: 'https://github.com/MatiasLance/tfw9s-backend' },
    ],
  },
  {
    name: 'Multi-Site WordPress Fleet Consolidation',
    status: 'Featured',
    description:
      'Consolidated 10 projects (custom web applications and WordPress sites) across optimized DigitalOcean Droplets using Docker Compose and Nginx Proxy Manager, reducing monthly infrastructure costs by 67% (from $1,200 to $400/month).',
    problem:
      'Multiple client projects and WordPress sites were spread across separate hosting accounts, causing high overhead, inconsistent environments, and manual deployment bottlenecks.',
    contributions: [
      'Containerized all applications (Laravel, Nuxt.js, WordPress) with Docker for environment parity.',
      'Orchestrated 10 projects behind Nginx Proxy Manager on optimized DigitalOcean Droplets.',
      'Automated deployment workflows with Bash scripts, reducing release time from 30 to 10 minutes.',
      'Achieved 67% hosting cost reduction ($1,200 → $400/month) while improving reliability.',
    ],
    stack: ['Docker', 'Docker Compose', 'Nginx Proxy Manager', 'DigitalOcean', 'WordPress', 'Laravel', 'Nuxt.js', 'Bash'],
    links: [],
  },
  {
    name: 'Custom WordPress Solutions & E-Commerce Integration',
    status: 'Featured',
    description:
      'Engineered custom WordPress features and secure payment gateways beyond standard plugins to meet complex business requirements, including headless WordPress with Nuxt.js frontends.',
    problem:
      'Client requirements exceeded plugin capabilities — needing custom post types, advanced ACF layouts, secure e-path payment verification, Core Web Vitals optimization, and headless architecture.',
    contributions: [
      'Built custom PHP themes/plugins replacing bloated page builder stacks (Elementor, Divi, WPBakery).',
      'Integrated secure e-path payment system with real-time verification.',
      'Optimized Core Web Vitals and page speed scores across WordPress fleet.',
      'Implemented headless WordPress + Nuxt.js for decoupled frontend architecture.',
    ],
    stack: ['WordPress', 'PHP', 'Nuxt.js', 'WooCommerce', 'Custom Plugins', 'Core Web Vitals', 'Headless CMS'],
    links: [],
  },
  {
    name: 'Muscle Prime Infrastructure Upgrade',
    status: 'Featured',
    description:
      'Implemented real-time version notification modals, integrated a secure e-path payment system with real-time verification, and initiated Kubernetes transition for enhanced scalability.',
    problem:
      'Releases needed a clearer user-facing signal, and payments required a more reliable verification path.',
    contributions: [
      'Implemented a real-time version notification modal so users could see when a new deployment was available.',
      'Integrated a secure e-path payment system with real-time verification.',
      'Transitioning the project toward Kubernetes for improved scalability.',
    ],
    stack: ['Kubernetes', 'PHP', 'Docker', 'Payment Integration'],
    links: [],
  },
  {
    name: 'Plumbing Express Solutions',
    status: 'Featured',
    description:
      'High-performance local business WordPress platform built for speed and lead conversion.',
    problem:
      'The client needed a fast, reliable 24/7 service platform with zero downtime and optimized local SEO structure.',
    contributions: [
      'Engineered custom WordPress layout and features',
      'Optimized site speed and Core Web Vitals',
      'Configured secure server deployment',
    ],
    stack: ['WordPress', 'PHP', 'CSS3', 'DigitalOcean', 'Nginx'],
    links: [
      { label: 'Live', href: 'https://plumbingexpresssolutions.com/' },
    ],
  },
  {
    name: 'Grandpa\'s Dairy',
    status: 'Featured',
    description:
      'Specialized e-commerce and product catalog WordPress web platform for farm-fresh dairy distribution.',
    problem:
      'Needed a secure, scalable product showcasing and ordering environment adhering to strict family recipe branding and easy category management.',
    contributions: [
      'Built custom product management workflows',
      'Optimized WooCommerce performance',
      'Implemented secure SSL/DNS management',
    ],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Cloudflare'],
    links: [
      { label: 'Live', href: 'https://grandpasdairy.au/' },
    ],
  },
  {
    name: 'Blistik Ads & Digital Tech',
    status: 'Featured',
    description:
      'Digital marketing and technology solutions platform featuring custom interactive layouts.',
    problem:
      'Required high-end professional UI elements and clean custom code integration without relying on bloated page builder plugins.',
    contributions: [
      'Developed custom WordPress themes',
      'Integrated responsive UI components',
      'Tuned performance metrics for fast asset loading',
    ],
    stack: ['WordPress', 'Custom PHP', 'JavaScript', 'Tailwind/CSS'],
    links: [
      { label: 'Live', href: 'https://blistik.com/' },
    ],
  },
  {
    name: 'PageOne247 Corporate Portal',
    status: 'Featured',
    description:
      'Central infrastructure and development agency hub managing multiple containerized services.',
    problem:
      'Needed robust hosting coordination, unified proxy configurations, and high-security deployment pipelines.',
    contributions: [
      'Containerized deployment environments via Docker Compose and Nginx Proxy Manager',
      'Optimized multi-site management',
      'Slashed hosting overhead',
    ],
    stack: ['WordPress', 'Docker', 'Nginx Proxy Manager', 'DigitalOcean'],
    links: [
      { label: 'Live', href: 'https://pageone247.com/' },
    ],
  },
  {
    name: 'Enterprise Client Solutions',
    status: 'Featured',
    description:
      'Portfolio of custom-coded enterprise WordPress deployments, directory integrations, and performance-tuned regional sites.',
    problem:
      'Clients faced site-speed degradation, plugin bloat, and fragmented security environments across various hosting providers.',
    contributions: [
      'Executed zero-downtime migrations',
      'Cleaned custom PHP codebases',
      'Hardened cPanel/WordPress security',
      'Set up automated SSL pipelines',
    ],
    stack: ['WordPress', 'PHP', 'MySQL', 'cPanel', 'SSL / DNS Management'],
    links: [
      { label: 'databasy.io', href: 'https://databasy.io/' },
      { label: 'glitteratiperformanceco.com', href: 'https://glitteratiperformanceco.com/' },
      { label: 'princeig.com.au', href: 'https://princeig.com.au/' },
      { label: 'globalspec.com.au', href: 'https://globalspec.com.au/' },
    ],
  },
  {
    name: 'Muscle Prime',
    status: 'Featured',
    description:
      'High-performance e-commerce and fitness web platform featuring real-time user verification and scalable cloud infrastructure.',
    problem:
      'The application needed smooth version notification management during updates, secure real-time payment verification, and long-term infrastructure scalability.',
    contributions: [
      'Implemented real-time version notification modals',
      'Integrated secure e-path payment systems with live verification',
      'Initiated the transition to Kubernetes for enhanced fault tolerance',
    ],
    stack: ['PHP', 'Kubernetes', 'Docker', 'Payment Integration', 'Backend API'],
    links: [
      { label: 'Live', href: 'https://muscleprime.ai/' },
    ],
  },
  {
    name: 'Fighter Hive',
    status: 'Featured',
    description:
      'Specialized combat sports and community web platform optimized for high-concurrency zero-downtime deployments.',
    problem:
      'Maintaining absolute uptime and reliable container health checks during rapid feature releases and high traffic spikes.',
    contributions: [
      'Engineered and optimized frontend/backend architecture using Nuxt 2 and Laravel',
      'Tailored for zero-downtime Kubernetes deployments using custom liveness and readiness probes',
    ],
    stack: ['Nuxt.js', 'Laravel', 'Kubernetes', 'Docker', 'MySQL'],
    links: [
      { label: 'Live', href: 'https://fighterhive.com/' },
    ],
  },
  {
    name: 'The Drum HQ',
    status: 'Featured',
    description:
      'Premium e-commerce platform and community hub for drumming enthusiasts featuring optimized speed and responsive interfaces.',
    problem:
      'Slow page load times and fragmented frontend UI components were impacting user engagement and conversion rates.',
    contributions: [
      'Enhanced UI/UX and resolved frontend bugs',
      'Optimized database queries and frontend code to slash page load times by 40%',
      'Implemented SEO metadata configurations',
    ],
    stack: ['Vue.js', 'PHP', 'MySQL', 'SEO', 'Performance Optimization'],
    links: [
      { label: 'Live', href: 'https://thedrumhq.com.au/' },
    ],
  },
  {
    name: 'The Final Whistle',
    status: 'Featured',
    description:
      'Dynamic sports e-commerce and live engagement platform featuring real-time data streaming and staging validation workflows.',
    problem:
      'Managing feature rollouts safely and handling real-time interactive user engagement features without latency.',
    contributions: [
      'Provisioned dedicated staging environments to validate "Waiting Lounge" features prior to production release',
      'Implemented real-time data rendering with Socket.IO to elevate user engagement',
    ],
    stack: ['Vue.js', 'Socket.IO', 'Staging Environments', 'Real-Time Data'],
    links: [
      { label: 'Live', href: 'https://tfw9s.com.au/' },
    ],
  },
]

export const infrastructure: {
  intro: string
  items: InfraItem[]
  currently: string
} = {
  intro:
    'Infrastructure work is not a side interest. It is part of how I ship Laravel, Nuxt, and WordPress applications: containers, reverse proxies, DNS, TLS, and the scripts that make a release repeatable — whether it\'s a custom API or a multisite fleet.',
  items: [
    {
      title: 'Docker and Compose',
      detail:
        'I containerize applications so local development and production stay aligned. The WordPress fleet and custom apps run frontend, backend, MySQL, and Nginx from Compose with pinned image tags.',
    },
    {
      title: 'Nginx Proxy Manager (NPM) reverse proxy',
      detail:
        'I placed 10 projects (custom Laravel/Nuxt apps and WordPress sites) behind Nginx Proxy Manager on optimized DigitalOcean Droplets. That consolidation cut hosting costs by 67% (from $1,200 to $400/month) without splitting each app onto its own server.',
    },
    {
      title: 'Deployment automation',
      detail:
        'Bash scripts handle the release path for both custom applications and WordPress deployments. The same work that used to take about 30 minutes now lands in about 10.',
    },
    {
      title: 'Linux server management',
      detail:
        'Day-to-day work includes Ubuntu servers, DigitalOcean Droplets, cPanel, and keeping WordPress environments patched, TLS-ready, and optimized for Core Web Vitals.',
    },
    {
      title: 'DNS and TLS',
      detail:
        'I manage DNS across Cloudflare, Hostinger, and HostGator, including zero-downtime domain migrations and SSL certificate setup for mixed tech stacks.',
    },
    {
      title: 'Database operations',
      detail:
        'I operate MySQL in production for both Laravel applications and WordPress, spending time on query optimization when application performance starts to slip.',
    },
  ],
  currently:
    'I am researching Kubernetes so the next step after a well-run Droplet is a more fault-tolerant layout. Muscle Prime is the first project I am moving in that direction.',
}

export const expertise = [
  {
    title: 'Custom Web Application Architecture',
    text: 'Designing and scaling Laravel backends, Nuxt.js/Vue.js frontends, and REST APIs with clean architecture, maintainable code, and performance-first mindset.',
  },
  {
    title: 'Advanced WordPress Engineering',
    text: 'Replacing bloated plugin stacks with custom-coded themes/plugins, ACF-driven layouts, headless WordPress + Nuxt, secure payment integrations, and Core Web Vitals optimization.',
  },
  {
    title: 'Cloud & Infrastructure Cost Optimization',
    text: 'Using Docker, Docker Compose, and Nginx Proxy Manager to consolidate mixed tech stacks — custom apps and WordPress fleets — saving up to 67% on hosting bills with automated, repeatable deployments.',
  },
]

export const businessSolutions: BusinessSolution[] = [
  {
    id: 'custom-web-apps',
    title: 'Custom Web App Architecture & Scaling',
    description:
      'End-to-end design and delivery of resilient Laravel backends and high-speed Nuxt.js/Vue.js SPAs. From database schema to CI/CD, I build applications that scale with your business.',
    icon: '🚀',
    features: [
      'Laravel API development with clean architecture',
      'Nuxt.js/Vue.js frontend with SSR/SSG',
      'RESTful & GraphQL API design',
      'Database design & SQL optimization',
      'Automated testing & deployment pipelines',
      'Horizontal scaling with Docker & Kubernetes',
    ],
  },
  {
    id: 'wordpress-engineering',
    title: 'Advanced WordPress Engineering & Optimization',
    description:
      'Transform WordPress from a blogging tool into a powerful application platform. Custom themes, plugins, headless architectures, and performance tuning that beats any page builder.',
    icon: '⚡',
    features: [
      'Custom theme & plugin development (PHP, ACF)',
      'Elementor/Divi/WPBakery migration to custom code',
      'Headless WordPress + Nuxt.js frontends',
      'WooCommerce customization & payment gateways',
      'Core Web Vitals & page speed optimization',
      'Multisite fleet management & security hardening',
    ],
  },
  {
    id: 'infrastructure-optimization',
    title: 'Cloud & Infrastructure Cost Optimization',
    description:
      'Consolidate your entire tech stack — custom applications, WordPress sites, databases — onto optimized infrastructure. Proven 67% cost reduction with faster, more reliable deployments.',
    icon: '☁️',
    features: [
      'Docker containerization for environment parity',
      'Nginx Proxy Manager for multi-site orchestration',
      'DigitalOcean/AWS/GCP infrastructure design',
      'Automated Bash/Ansible deployment scripts',
      'SSL/TLS, DNS, and Cloudflare configuration',
      'Monitoring, logging, and backup strategies',
    ],
  },
]
