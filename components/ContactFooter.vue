<script setup lang="ts">
import {
  ArrowUp,
  ArrowUpRight,
  CircleCheck,
  Clock,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import { contactScopes, profile, sectionCopy, site } from '~/data/portfolio'
import type { ContactFormState } from '~/types/portfolio'

const copy = sectionCopy.contact

const form = reactive<ContactFormState>({
  name: '',
  email: '',
  company: '',
  scope: 'web-app',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

type RequiredField = keyof typeof errors

const requiredFields: RequiredField[] = ['name', 'email', 'message']

const fieldIds: Record<RequiredField, string> = {
  name: 'inquiry-name',
  email: 'inquiry-email',
  message: 'inquiry-message',
}

const submitted = ref(false)
const successPanel = ref<HTMLElement | null>(null)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const socialLinks = computed(() => profile.social.filter((link) => link.label !== 'Email'))

const socialIcons: Record<string, Component> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
}

const selectedScope = computed(
  () => contactScopes.find((scope) => scope.id === form.scope)?.label ?? 'New project',
)

const draftHref = computed(() => {
  const subject = `Project inquiry — ${selectedScope.value} — ${form.name.trim() || 'New inquiry'}`
  const body = [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    form.company.trim() ? `Company: ${form.company.trim()}` : '',
    `Scope: ${selectedScope.value}`,
    '',
    form.message.trim(),
  ]
    .filter(Boolean)
    .join('\n')

  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

const year = new Date().getFullYear()

function validateField(field: RequiredField) {
  if (field === 'name') {
    errors.name =
      form.name.trim().length >= 2 ? '' : 'Please enter your name so I know who I’m replying to.'
  }

  if (field === 'email') {
    errors.email = emailPattern.test(form.email.trim())
      ? ''
      : 'Enter a valid email address so the reply reaches you.'
  }

  if (field === 'message') {
    errors.message =
      form.message.trim().length >= 20
        ? ''
        : 'Add a little more context—at least 20 characters.'
  }
}

function clearError(field: RequiredField) {
  errors[field] = ''
}

async function handleSubmit() {
  requiredFields.forEach(validateField)

  const firstInvalid = requiredFields.find((field) => errors[field])
  if (firstInvalid) {
    document.getElementById(fieldIds[firstInvalid])?.focus()
    return
  }

  submitted.value = true
  await nextTick()
  successPanel.value?.focus()
  window.location.href = draftHref.value
}

function resetForm() {
  Object.assign(form, {
    name: '',
    email: '',
    company: '',
    scope: 'web-app',
    message: '',
  })
  errors.name = ''
  errors.email = ''
  errors.message = ''
  submitted.value = false

  nextTick(() => document.getElementById('inquiry-name')?.focus())
}
</script>

<template>
  <footer
    id="contact"
    aria-labelledby="contact-title"
    class="relative overflow-hidden border-t border-line/60 bg-surface/[0.12]"
  >
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="bg-grid mask-fade-b absolute inset-0 opacity-40" />
      <div
        class="absolute -bottom-48 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-white/[0.07] blur-[130px]"
      />
    </div>

    <div class="container-page section-pad relative">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-5">
          <SectionHeading
            :eyebrow="copy.eyebrow"
            :title="copy.title"
            :description="copy.description"
            title-id="contact-title"
          />

          <div class="mt-8 rounded-2xl border border-white/15 bg-white/[0.05] p-4">
            <div class="flex items-center gap-2">
              <span class="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"
                />
                <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-white">
                {{ profile.availability.label }}
              </p>
            </div>
            <p class="mt-2 text-[12px] leading-relaxed text-neutral-400">
              {{ profile.availability.detail }}
            </p>
          </div>

          <div class="mt-4 rounded-xl border border-line bg-surface/30 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                Direct email
              </p>
              <CopyButton :value="profile.email" label="Copy" copied-label="Copied" />
            </div>
            <a
              :href="`mailto:${profile.email}`"
              class="mt-1 block truncate text-[13px] font-medium text-neutral-200 transition-colors hover:text-white"
            >
              {{ profile.email }}
            </a>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3 text-xs font-medium text-neutral-400 transition duration-200 hover:border-line-strong hover:bg-white/[0.04] hover:text-white"
              :aria-label="`${social.label} — ${social.handle} (opens in a new tab)`"
            >
              <component
                :is="socialIcons[social.label] ?? Globe"
                class="h-3.5 w-3.5"
                aria-hidden="true"
              />
              {{ social.label }}
              <ArrowUpRight class="h-3 w-3 text-neutral-600" aria-hidden="true" />
            </a>
          </div>

          <dl class="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
            <div class="flex items-start gap-2.5">
              <Clock class="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-600" aria-hidden="true" />
              <div>
                <dt class="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
                  Response
                </dt>
                <dd class="mt-0.5 text-[11px] text-neutral-400">{{ profile.responseTime }}</dd>
              </div>
            </div>
            <div class="flex items-start gap-2.5">
              <MapPin class="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-600" aria-hidden="true" />
              <div>
                <dt class="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
                  Based in
                </dt>
                <dd class="mt-0.5 text-[11px] text-neutral-400">
                  {{ profile.location }} · {{ profile.timezone }}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div class="lg:col-span-7">
          <div
            class="rounded-2xl border border-line bg-canvas/70 p-5 shadow-card backdrop-blur-sm sm:p-7"
          >
            <div
              class="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-5"
            >
              <div>
                <p class="eyebrow">Project inquiry</p>
                <p class="mt-1.5 text-[13px] text-neutral-400">
                  A few details are enough to start.
                </p>
              </div>
              <span
                class="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500"
              >
                <Clock class="h-3 w-3" aria-hidden="true" />
                {{ profile.responseTime }}
              </span>
            </div>

            <div
              v-if="submitted"
              ref="successPanel"
              role="status"
              tabindex="-1"
              class="mt-6 rounded-xl border border-white/20 bg-white/[0.05] p-5 outline-none sm:p-6"
            >
              <span
                class="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white"
              >
                <CircleCheck class="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 class="mt-4 text-lg font-semibold text-white">Your email draft is ready.</h3>
              <p class="mt-2 text-[13px] leading-relaxed text-neutral-400">
                Your mail app should open with the project details. If it didn’t, reopen the draft
                below or email me directly—nothing you entered is lost.
              </p>
              <div class="mt-5 flex flex-col gap-2 sm:flex-row">
                <a :href="draftHref" class="btn-primary">
                  Reopen email draft
                  <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
                </a>
                <button type="button" class="btn-secondary" @click="resetForm">
                  Start another inquiry
                </button>
              </div>
              <a
                :href="`mailto:${profile.email}`"
                class="mt-4 inline-flex min-h-11 items-center gap-2 text-[11px] text-neutral-500 transition-colors hover:text-white"
              >
                <Mail class="h-3.5 w-3.5" aria-hidden="true" />
                {{ profile.email }}
              </a>
            </div>

            <form
              v-else
              class="mt-6 space-y-5"
              aria-labelledby="inquiry-heading"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <h3 id="inquiry-heading" class="sr-only">Project inquiry form</h3>

              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label for="inquiry-name" class="field-label">
                    Name <span class="text-white/80" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    placeholder="Your name"
                    class="field"
                    :class="errors.name ? 'border-white/60 focus:border-white' : ''"
                    :aria-invalid="errors.name ? 'true' : undefined"
                    :aria-describedby="errors.name ? 'inquiry-name-error' : undefined"
                    aria-required="true"
                    @blur="validateField('name')"
                    @input="clearError('name')"
                  />
                  <p
                    v-if="errors.name"
                    id="inquiry-name-error"
                    class="field-error"
                    role="alert"
                  >
                    {{ errors.name }}
                  </p>
                </div>

                <div>
                  <label for="inquiry-email" class="field-label">
                    Email <span class="text-white/80" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    inputmode="email"
                    autocomplete="email"
                    spellcheck="false"
                    placeholder="you@company.com"
                    class="field"
                    :class="errors.email ? 'border-white/60 focus:border-white' : ''"
                    :aria-invalid="errors.email ? 'true' : undefined"
                    :aria-describedby="errors.email ? 'inquiry-email-error' : undefined"
                    aria-required="true"
                    @blur="validateField('email')"
                    @input="clearError('email')"
                  />
                  <p
                    v-if="errors.email"
                    id="inquiry-email-error"
                    class="field-error"
                    role="alert"
                  >
                    {{ errors.email }}
                  </p>
                </div>
              </div>

              <div>
                <label for="inquiry-company" class="field-label">
                  Company <span class="normal-case tracking-normal text-neutral-600">(optional)</span>
                </label>
                <input
                  id="inquiry-company"
                  v-model="form.company"
                  type="text"
                  name="company"
                  autocomplete="organization"
                  placeholder="Company or product name"
                  class="field"
                />
              </div>

              <fieldset>
                <legend class="field-label">What do you need?</legend>
                <div class="mt-1 grid gap-2 sm:grid-cols-2">
                  <label
                    v-for="scope in contactScopes"
                    :key="scope.id"
                    class="relative flex cursor-pointer flex-col rounded-xl border p-3.5 transition duration-200 focus-within:ring-2 focus-within:ring-white/40"
                    :class="
                      form.scope === scope.id
                        ? 'border-white/50 bg-white/[0.08]'
                        : 'border-line bg-surface/40 hover:border-line-strong'
                    "
                  >
                    <input
                      v-model="form.scope"
                      type="radio"
                      name="project-scope"
                      :value="scope.id"
                      class="sr-only"
                    />
                    <span class="pr-5 text-[12px] font-medium text-neutral-200">
                      {{ scope.label }}
                    </span>
                    <span class="mt-0.5 text-[10px] leading-relaxed text-neutral-500">
                      {{ scope.hint }}
                    </span>
                    <span
                      class="absolute right-3 top-3 grid h-4 w-4 place-items-center rounded-full border"
                      :class="
                        form.scope === scope.id
                          ? 'border-white bg-white/20'
                          : 'border-line-strong'
                      "
                      aria-hidden="true"
                    >
                      <span
                        v-if="form.scope === scope.id"
                        class="h-1.5 w-1.5 rounded-full bg-white/80"
                      />
                    </span>
                  </label>
                </div>
              </fieldset>

              <div>
                <label for="inquiry-message" class="field-label">
                  Project context <span class="text-white/80" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="inquiry-message"
                  v-model="form.message"
                  name="message"
                  rows="4"
                  placeholder="What are you building, what’s slowing it down, and what does success look like?"
                  class="field-area"
                  :class="errors.message ? 'border-white/60 focus:border-white' : ''"
                  :aria-invalid="errors.message ? 'true' : undefined"
                  :aria-describedby="errors.message ? 'inquiry-message-error' : undefined"
                  aria-required="true"
                  @blur="validateField('message')"
                  @input="clearError('message')"
                />
                <p
                  v-if="errors.message"
                  id="inquiry-message-error"
                  class="field-error"
                  role="alert"
                >
                  {{ errors.message }}
                </p>
              </div>

              <div class="flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p class="flex items-start gap-2 text-[10px] leading-relaxed text-neutral-600">
                  <ShieldCheck class="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Your details are only used to reply. No lists, no sequences.
                </p>
                <button type="submit" class="btn-primary group w-full shrink-0 sm:w-auto">
                  Send project inquiry
                  <Send
                    class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-[11px] text-neutral-600">
          © {{ year }} {{ profile.name }}. Built with Nuxt, Tailwind, and production discipline.
        </p>

        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            :href="site.url"
            class="inline-flex min-h-11 items-center gap-1.5 text-[11px] text-neutral-500 transition-colors hover:text-white"
          >
            {{ site.url.replace('https://', '') }}
            <ArrowUpRight class="h-3 w-3" aria-hidden="true" />
          </a>
          <a
            href="#top"
            class="group inline-flex min-h-11 items-center gap-1.5 text-[11px] text-neutral-500 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp
              class="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
