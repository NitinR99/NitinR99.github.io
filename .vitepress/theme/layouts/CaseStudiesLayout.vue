<script setup lang="ts">
import { useData } from "vitepress";
import { data as caseStudies } from "@content/case-studies.data";

const { frontmatter } = useData();

// Newest article leads; the rest go in the grid below.
const [featured, ...rest] = caseStudies;
</script>

<!-- /case-studies: intro, a featured lead (newest), then a card grid. -->
<template>
  <section class="page-container pt-24 pb-16 max-sm:pt-16">
    <p class="eyebrow">Case studies</p>
    <h1 class="mt-4 text-[clamp(2.75rem,7vw,5rem)] leading-[0.95]">{{ frontmatter.heading }}</h1>
    <p class="mt-6 max-w-[52ch] text-xl leading-snug text-muted-foreground">
      {{ frontmatter.description }}
    </p>
  </section>

  <section class="page-container pb-24">
    <a
      v-if="featured"
      :href="featured.url"
      class="group grid items-center gap-x-12 gap-y-6 border-t pt-10 md:grid-cols-[3fr_2fr]"
    >
      <div class="overflow-hidden rounded-lg bg-surface">
        <img
          v-if="featured.cover"
          class="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          :src="featured.cover"
          :alt="featured.coverAlt"
          width="1600"
          height="700"
          fetchpriority="high"
        />
        <div v-else class="aspect-[16/9]" />
      </div>
      <div>
        <p class="text-sm text-subtle tabular-nums">
          <template v-if="featured.tags[0]">{{ featured.tags[0] }} · </template>
          {{ featured.readingTime }} min read
        </p>
        <h2 class="mt-3 text-3xl leading-tight sm:text-4xl">
          <span class="link group-hover:decoration-current">{{ featured.title }}</span>
        </h2>
        <p class="mt-4 line-clamp-3 text-lg leading-snug text-muted-foreground">
          {{ featured.description }}
        </p>
      </div>
    </a>

    <ul
      v-if="rest.length"
      class="mt-16 grid gap-x-8 gap-y-12 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li v-for="cs in rest" :key="cs.url">
        <a :href="cs.url" class="group block">
          <div class="overflow-hidden rounded-lg bg-surface">
            <img
              v-if="cs.cover"
              class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              :src="cs.cover"
              :alt="cs.coverAlt"
              width="1600"
              height="700"
              loading="lazy"
            />
            <div v-else class="aspect-[4/3]" />
          </div>
          <p class="mt-5 text-sm text-subtle tabular-nums">
            <template v-if="cs.tags[0]">{{ cs.tags[0] }} · </template>
            {{ cs.readingTime }} min read
          </p>
          <h2 class="mt-2 text-xl leading-snug">
            <span class="link group-hover:decoration-current">{{ cs.title }}</span>
          </h2>
          <p class="mt-2 line-clamp-2 text-muted-foreground">{{ cs.description }}</p>
        </a>
      </li>
    </ul>

    <!-- Empty state until the first article is published. -->
    <div v-if="!caseStudies.length" class="border-t pt-10">
      <div class="max-w-[60ch] rounded-lg border bg-surface p-8 max-sm:p-6">
        <p class="flex items-center gap-2.5 text-sm font-medium text-accent">
          <span class="relative flex size-2" aria-hidden="true">
            <span
              class="absolute inset-0 rounded-full bg-accent opacity-60 motion-safe:animate-ping"
            />
            <span class="relative size-2 rounded-full bg-accent" />
          </span>
          In the works
        </p>
        <h2 class="mt-4 text-2xl leading-snug sm:text-3xl">
          The first write-ups are on their way.
        </h2>
        <p class="mt-3 text-muted-foreground">
          I’m going through my notes from recent projects and turning them into proper case studies:
          the problem, the options I weighed, what I chose and what I’d do differently. Check back
          soon.
        </p>
        <a href="/#work" class="btn btn-outline mt-6">See my work in the meantime</a>
      </div>
    </div>
  </section>
</template>
