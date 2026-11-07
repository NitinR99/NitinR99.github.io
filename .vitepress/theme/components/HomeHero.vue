<script setup lang="ts">
import { useData } from "vitepress";
import NewTabIcon from "./NewTabIcon.vue";
import type { HomeFrontmatter, ThemeConfig } from "../types";

const { theme, frontmatter } = useData<ThemeConfig>();
const { profile } = theme.value;
const fm = frontmatter.value as HomeFrontmatter;

const stack = profile.topFour;
</script>

<template>
  <section class="page-container pt-24 pb-28 max-sm:pt-16 max-sm:pb-20">
    <p class="flex items-center gap-2 text-sm text-muted-foreground">
      <span class="relative flex size-2">
        <span class="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
        <span class="relative size-2 rounded-full bg-accent" />
      </span>
      {{ profile.jobTitle }} · Working full-time in {{ profile.workingIn }}
    </p>

    <h1 class="mt-8 text-[clamp(3.25rem,9vw,7rem)] leading-[0.95]">
      {{ profile.firstName }} <em class="text-muted-foreground">{{ profile.lastName }}</em>
    </h1>

    <p class="mt-8 max-w-[34ch] text-xl leading-snug text-muted-foreground sm:text-2xl">
      {{ fm.subtitle }}
      <template v-for="(tech, i) in stack" :key="tech">
        <span class="text-foreground">{{ tech }}</span
        >{{ i < stack.length - 2 ? ", " : i === stack.length - 2 ? " and " : "." }}
      </template>
    </p>

    <div class="mt-10 flex flex-wrap gap-3">
      <a class="btn btn-primary" :href="profile.resumeUrl" target="_blank">
        View resume <NewTabIcon pdf />
      </a>
      <a class="btn btn-outline" :href="profile.linkedInUrl" target="_blank" rel="noopener">
        LinkedIn <NewTabIcon />
      </a>
    </div>
  </section>
</template>
