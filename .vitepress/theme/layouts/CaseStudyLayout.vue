<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { ArrowLeft, ArrowRight } from "@lucide/vue";
import { data as caseStudies } from "@content/case-studies.data";

const { frontmatter } = useData();
const route = useRoute();

// Look this article up in the loader data for its reading time and neighbours.
const index = computed(() => caseStudies.findIndex((cs) => cs.url === route.path));
const current = computed(() => caseStudies[index.value]);
// List is newest first, so the next entry is the next-older article.
const next = computed(() => caseStudies[index.value + 1]);

const facts = computed(() => (frontmatter.value.facts ?? []) as { label: string; value: string }[]);
</script>

<template>
  <article class="page-container py-20 max-sm:py-14">
    <div class="mx-auto max-w-[68ch]">
      <a
        href="/case-studies"
        class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground [&_svg]:size-4"
      >
        <ArrowLeft aria-hidden="true" /> All case studies
      </a>

      <header class="mt-12">
        <p v-if="current" class="eyebrow">{{ current.readingTime }} min read</p>
        <h1 class="mt-4 text-[clamp(2.5rem,6vw,4rem)] leading-[1.02]">{{ frontmatter.title }}</h1>
        <p class="mt-6 text-xl leading-snug text-muted-foreground">
          {{ frontmatter.description }}
        </p>
        <ul v-if="frontmatter.tags?.length" class="mt-6 flex flex-wrap gap-2">
          <li
            v-for="tag in frontmatter.tags"
            :key="tag"
            class="rounded-full border px-3 py-0.5 text-xs text-muted-foreground"
          >
            {{ tag }}
          </li>
        </ul>
      </header>
    </div>

    <!-- Cover breaks out of the text column to the full page width. -->
    <div v-if="frontmatter.cover" class="mt-12 overflow-hidden rounded-lg bg-surface">
      <img
        class="aspect-[16/7] w-full object-cover max-sm:aspect-[16/9]"
        :src="frontmatter.cover"
        :alt="frontmatter.coverAlt ?? ''"
        width="1600"
        height="700"
        fetchpriority="high"
      />
    </div>

    <div class="mx-auto max-w-[68ch]">
      <!-- At a glance: role, stack, timeframe, outcome… -->
      <dl v-if="facts.length" class="mt-12 grid gap-x-8 gap-y-6 border-y py-8 sm:grid-cols-2">
        <div v-for="fact in facts" :key="fact.label">
          <dt class="eyebrow">{{ fact.label }}</dt>
          <dd class="mt-2">{{ fact.value }}</dd>
        </div>
      </dl>

      <div class="prose mt-12 max-w-none prose-h2:mt-14 prose-h2:text-3xl"><Content /></div>

      <footer v-if="next" class="mt-20 flex justify-end border-t pt-8 text-sm">
        <a :href="next.url" class="group text-right">
          <span class="eyebrow block">Next</span>
          <span
            class="mt-1 inline-flex items-center gap-2 font-serif text-lg [&_svg]:size-4 [&_svg]:transition-transform group-hover:[&_svg]:translate-x-0.5"
          >
            <span class="link group-hover:decoration-current">{{ next.title }}</span>
            <ArrowRight aria-hidden="true" />
          </span>
        </a>
      </footer>
    </div>
  </article>
</template>
