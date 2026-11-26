/**
 * Portfolio content contracts.
 *
 * Every piece of copy, metric, and project record rendered by the site is
 * defined here. UI components consume these types and never own content.
 */

export type SectionId = 'solutions' | 'work' | 'track-record' | 'stack' | 'contact'

export interface NavItem {
  id: SectionId
  label: string
}

export interface LinkAction {
  label: string
  href: string
}

export interface ImpactMetric {
  value: string
  label: string
}

export interface SocialLink {
  label: string
  handle: string
  href: string
}

export type AvailabilityStatus = 'available' | 'limited' | 'unavailable'

export interface Availability {
  status: AvailabilityStatus
  label: string
  detail: string
}

export interface Profile {
  name: string
  initials: string
  role: string
  location: string
  timezone: string
  email: string
  summary: string
  philosophy: string
  availability: Availability
  responseTime: string
  social: SocialLink[]
}

export interface SiteMeta {
  title: string
  description: string
  url: string
  ogImage: string
}

export interface HeroContent {
  eyebrow: string
  headline: string
  headlineAccent: string
  description: string
  primaryCta: LinkAction
  secondaryCta: LinkAction
  note: string
  snapshot: {
    label: string
    rows: Array<{ label: string; value: string }>
  }
}

export interface SectionIntro {
  eyebrow: string
  title: string
  description: string
}

/* -------------------------------------------------------------------------- */
/* Solutions                                                                   */
/* -------------------------------------------------------------------------- */

export type SolutionIconName = 'application' | 'commerce' | 'cms' | 'cloud'

export interface Solution {
  id: string
  title: string
  outcome: string
  description: string
  icon: SolutionIconName
  deliverables: string[]
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = 'web-apps' | 'ecommerce' | 'cms'
export type ProjectFilterId = 'all' | ProjectCategory

export interface ProjectCategoryOption {
  id: ProjectFilterId
  label: string
}

export type PreviewTone = 'blue' | 'emerald' | 'violet' | 'amber'
export type PreviewMotif = 'dashboard' | 'commerce' | 'editorial'

export interface ProjectPreview {
  monogram: string
  tone: PreviewTone
  motif: PreviewMotif
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ArchitectureLayer {
  label: string
  detail: string
}

export interface Project {
  id: string
  name: string
  client: string
  category: ProjectCategory
  status: 'Completed' | 'In Progress'
  summary: string
  challenge: string
  solution: string
  impact: ImpactMetric
  deliverables: string[]
  architecture: ArchitectureLayer[]
  integrations: string[]
  stack: string[]
  links: ProjectLink[]
  preview: ProjectPreview
}

/* -------------------------------------------------------------------------- */
/* Track record                                                                */
/* -------------------------------------------------------------------------- */

export type AchievementIconName =
  | 'foundation'
  | 'cost'
  | 'velocity'
  | 'reliability'
  | 'payments'
  | 'security'
  | 'performance'
  | 'seo'

export interface Achievement {
  id: string
  phase: string
  title: string
  org?: string
  summary: string
  metric?: ImpactMetric
  icon: AchievementIconName
}

export interface CurrentRole {
  company: string
  title: string
  period: string
  location: string
  focus: string
  principle: string
}

/* -------------------------------------------------------------------------- */
/* Tech stack                                                                  */
/* -------------------------------------------------------------------------- */

export type TechIconName = 'frontend' | 'backend' | 'cloud' | 'payments' | 'automation'

export interface TechCategory {
  id: string
  label: string
  description: string
  icon: TechIconName
  items: string[]
}

export interface StackNote {
  label: string
  items: string[]
}

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */

export type ContactScopeId = 'web-app' | 'ecommerce' | 'devops' | 'wordpress'

export interface ContactScope {
  id: ContactScopeId
  label: string
  hint: string
}

export interface ContactFormState {
  name: string
  email: string
  company: string
  scope: ContactScopeId
  message: string
}
