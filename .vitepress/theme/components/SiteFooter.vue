<script setup lang="ts">
import { useData } from "vitepress";
import type { ThemeConfig } from "../types";

const { site, theme } = useData<ThemeConfig>();
const { profile, year } = theme.value;
</script>

<template>
  <footer class="page-container">
    <div
      class="flex justify-between gap-x-8 gap-y-3 border-t py-10 text-sm text-subtle max-md:flex-col"
    >
      <p>
        © {{ year }} {{ site.title }} · Based in {{ profile.workingIn }} · Open to
        {{ profile.openToRole }} opportunities
      </p>
      <nav class="flex gap-6">
        <a class="link hover:text-foreground" href="/legal-notice">Legal notice</a>
        <a class="link hover:text-foreground" href="/data-protection">Data protection</a>
      </nav>
    </div>
  </footer>
</template>
