<script setup lang="ts">
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
const fm = frontmatter.value as HomeFrontmatter;
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
    <!-- Image + entry read as one card: same width, image directly above its caption. -->
    <img
      class="mb-2 aspect-[16/7] w-full rounded-lg object-cover max-sm:aspect-[16/9]"
      src="/images/abstract-liquid-2.jpg"
      alt=""
      width="1800"
      height="1200"
      loading="lazy"
    />
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

  <section id="contact" class="page-container">
    <!-- Text and image share top and bottom edges: heading at the top, links at the bottom. -->
    <div class="grid gap-12 border-t py-24 md:grid-cols-[7fr_5fr] md:py-32">
      <div class="flex flex-col justify-between gap-10">
        <h2 class="text-[clamp(2.75rem,7vw,5.5rem)] leading-none">Let's connect.</h2>
        <div>
          <p class="max-w-[52ch] text-lg text-muted-foreground">{{ fm.reachOut }}</p>
          <div class="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-serif text-2xl">
            <a class="link inline-flex items-center gap-1" :href="`mailto:${profile.email}`">
              {{ profile.email }} <Mail class="size-5 text-subtle" />
            </a>
            <a
              class="link inline-flex items-center gap-1"
              :href="profile.linkedInUrl"
              target="_blank"
              rel="noopener"
            >
              LinkedIn <NewTabIcon />
            </a>
          </div>
        </div>
      </div>
      <img
        class="aspect-square w-full rounded-lg object-cover max-md:aspect-[16/9]"
        src="/images/abstract-liquid-1.jpg"
        alt=""
        width="1000"
        height="1750"
        loading="lazy"
      />
    </div>
  </section>
</template>
