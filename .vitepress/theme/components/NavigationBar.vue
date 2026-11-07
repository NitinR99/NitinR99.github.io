<script setup lang="ts">
import { useData } from "vitepress";
import { Moon, Sun } from "@lucide/vue";
import type { ThemeConfig } from "../types";

const { site, theme, isDark } = useData<ThemeConfig>();

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];
</script>

<template>
  <header class="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md border-on-scroll">
    <nav class="page-container flex h-16 items-center justify-between gap-6">
      <a href="/" class="font-serif text-xl tracking-tight">{{ site.title }}</a>
      <div class="flex items-center gap-1 text-sm">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground max-sm:hidden"
        >
          {{ l.label }}
        </a>
        <a
          :href="theme.profile.resumeUrl"
          target="_blank"
          class="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          Resume
        </a>
        <button
          class="btn-icon"
          title="Toggle dark mode"
          aria-label="Toggle dark mode"
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
