<script setup lang="ts">
import { useData } from "vitepress";
import type { ThemeConfig } from "../types";

const { site, theme } = useData<ThemeConfig>();
const { profile, year } = theme.value;
</script>

<template>
  <footer class="page-container flex flex-col gap-8 pb-4">
    <hr />
    <div class="flex justify-between gap-2 max-md:flex-col md:items-center">
      <div>
        <div>{{ site.title }}</div>
        <div class="text-small text-muted-foreground">
          {{ profile.jobTitle }} • {{ profile.topFour.join(" • ") }}
        </div>
      </div>
      <div class="flex flex-col text-caption underline">
        <a href="/">Home</a>
        <a href="/legal-notice">Legal notice</a>
        <a href="/data-protection">Data protection</a>
      </div>
    </div>
    <div class="flex justify-between gap-2 text-caption text-muted-foreground max-md:flex-col">
      <span>© {{ year }} {{ site.title }}. All rights reserved.</span>
      <span>Based in {{ profile.workingIn }} • Open to {{ profile.openToRole }} opportunities</span>
    </div>
  </footer>
</template>
