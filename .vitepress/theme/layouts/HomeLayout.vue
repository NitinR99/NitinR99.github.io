<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { Mail } from "@lucide/vue";
import { data as resume } from "@content/resume.data";
import EntryItem from "../components/EntryItem.vue";
import NewTabIcon from "../components/NewTabIcon.vue";
import HomeHero from "../components/HomeHero.vue";
import PageSection from "../components/PageSection.vue";
import type { HomeFrontmatter, ThemeConfig } from "../types";

const { theme, frontmatter } = useData<ThemeConfig>();
const { profile } = theme.value;
// computed, not a one-off copy, so frontmatter edits in index.md hot-reload.
const fm = computed(() => frontmatter.value as HomeFrontmatter);
</script>

<template>
  <HomeHero />

  <PageSection id="about" title="About">
    <p class="font-serif text-3xl leading-tight text-balance sm:text-4xl">
      {{ fm.whatIDo.threeThings.join(" · ") }}
    </p>
    <p class="mt-3 text-lg text-muted-foreground">{{ fm.whatIDo.subtitle }}</p>

    <div class="mt-16 grid gap-12 sm:grid-cols-2">
      <div>
        <h3 class="eyebrow font-sans">Focus</h3>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="focus in fm.myFocus"
            :key="focus"
            class="rounded-full border px-3 py-1 text-sm text-muted-foreground"
          >
            {{ focus }}
          </li>
        </ul>
      </div>
      <div>
        <h3 class="eyebrow font-sans">How I think</h3>
        <ol class="mt-3">
          <li
            v-for="(item, i) in fm.howIThink"
            :key="item"
            class="flex gap-4 border-b py-3 last:border-b-0"
          >
            <span class="pt-0.5 text-sm text-subtle tabular-nums">0{{ i + 1 }}</span>
            <span>{{ item }}</span>
          </li>
        </ol>
      </div>
    </div>
  </PageSection>

  <PageSection id="work" title="Experience">
    <EntryItem v-for="(entry, i) in resume.experience" :key="i" :entry="entry" :open="i === 0" />
  </PageSection>

  <PageSection id="education" title="Education">
    <EntryItem v-for="(entry, i) in resume.education" :key="i" :entry="entry" />
  </PageSection>

  <PageSection id="volunteering" title="Volunteering">
    <EntryItem v-for="(entry, i) in resume.volunteering" :key="i" :entry="entry" />
  </PageSection>

  <PageSection id="languages" title="Languages">
    <ul class="grid gap-8 sm:grid-cols-2">
      <li v-for="language in profile.languages" :key="language.name">
        <p class="font-serif text-3xl leading-tight">{{ language.name }}</p>
        <p class="mt-1 text-muted-foreground">{{ language.level }}</p>
      </li>
    </ul>
  </PageSection>

  <!-- Filled closing panel, styled like the case studies empty state. -->
  <section id="contact" class="page-container pb-16 md:pb-24">
    <!-- Message on the left, actions on the right, aligned to the bottom of the text. -->
    <div
      class="grid gap-10 rounded-lg border bg-surface p-8 max-sm:p-6 md:grid-cols-[1fr_auto] md:items-end md:p-12"
    >
      <div>
        <h2 class="text-[clamp(2.75rem,7vw,5.5rem)] leading-none">Let's connect.</h2>
        <p class="mt-6 max-w-[52ch] text-lg text-muted-foreground">{{ fm.reachOut }}</p>
      </div>
      <div class="flex flex-wrap gap-3 md:flex-col md:items-stretch">
        <a class="btn btn-primary" :href="`mailto:${profile.email}`">
          <Mail /> {{ profile.email }}
        </a>
        <a class="btn btn-outline" :href="profile.linkedInUrl" target="_blank" rel="noopener">
          LinkedIn <NewTabIcon />
        </a>
      </div>
    </div>
  </section>
</template>
