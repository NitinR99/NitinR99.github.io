<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useData, useRoute } from "vitepress";
import { Moon, Sun } from "@lucide/vue";
import type { ThemeConfig } from "../types";
import NewTabIcon from "./NewTabIcon.vue";

const { site, theme, isDark } = useData<ThemeConfig>();
const route = useRoute();
const onCaseStudies = computed(() => route.path.startsWith("/case-studies"));

// The theme is only known in the browser, so the prerendered HTML gets a neutral
// label and the real one ("Switch to …") is filled in after hydration.
const mounted = ref(false);
onMounted(() => (mounted.value = true));
const toggleLabel = computed(() =>
  mounted.value ? `Switch to ${isDark.value ? "light" : "dark"} theme` : "Toggle theme",
);

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];
</script>

<template>
  <header class="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md border-on-scroll">
    <nav class="page-container flex h-16 items-center justify-between gap-6 max-sm:gap-3">
      <a href="/" class="font-serif text-xl tracking-tight whitespace-nowrap max-sm:text-lg">{{
        site.title
      }}</a>
      <!-- Phones: Case studies + Resume + theme toggle must fit on one line at 360px. -->
      <div class="flex items-center gap-1 text-sm whitespace-nowrap max-sm:gap-0">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground max-sm:hidden"
        >
          {{ l.label }}
        </a>
        <!-- A page, not a home-page anchor, so it stays visible on phones. -->
        <a
          href="/case-studies"
          class="rounded-full px-3 py-1.5 transition-colors hover:text-foreground max-sm:px-2"
          :class="onCaseStudies ? 'text-foreground' : 'text-muted-foreground'"
          :aria-current="onCaseStudies ? 'page' : undefined"
        >
          Case studies
        </a>
        <a
          :href="theme.profile.resumeUrl"
          target="_blank"
          class="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground max-sm:px-2 max-sm:[&_svg]:hidden"
        >
          Resume <NewTabIcon pdf />
        </a>
        <button
          class="btn-icon"
          :title="toggleLabel"
          :aria-label="toggleLabel"
          @click="isDark = !isDark"
        >
          <!-- Both icons render; CSS shows the right one so static HTML fits either theme. -->
          <Sun class="hidden dark:block" />
          <Moon class="dark:hidden" />
        </button>
      </div>
    </nav>
  </header>
</template>
