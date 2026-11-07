<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { Moon, Sun } from "@lucide/vue";

const { site, frontmatter, isDark } = useData();
// On the home page the bar fades in as you scroll past the landing section.
const fade = computed(() => (frontmatter.value.layout === "home" ? "fade-in-on-scroll" : ""));
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 h-[50px] bg-background">
    <nav
      class="relative isolate mx-auto mt-2 flex h-[50px] w-[85%] items-center justify-between px-2 max-md:w-[90%] max-sm:w-[95%]"
    >
      <div class="absolute inset-0 -z-10 rounded-lg border bg-surface" :class="fade" />
      <a class="flex items-center select-none" href="/" :class="fade">
        <!-- Both are rendered and swapped with CSS, so the static HTML matches either theme. -->
        <img
          class="pointer-events-none dark:hidden"
          src="/favicon-light.png"
          alt="Home"
          width="40"
        />
        <img
          class="pointer-events-none hidden dark:block"
          src="/favicon-dark.png"
          alt="Home"
          width="40"
        />
        <span class="px-2 font-medium">{{ site.title }}</span>
      </a>
      <button
        class="btn-icon"
        title="Toggle dark mode"
        aria-label="Toggle dark mode"
        @click="isDark = !isDark"
      >
        <Sun class="hidden dark:block" />
        <Moon class="dark:hidden" />
      </button>
    </nav>
  </header>
</template>
