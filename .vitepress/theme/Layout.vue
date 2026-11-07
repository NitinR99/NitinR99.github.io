<script setup lang="ts">
import { onMounted } from "vue";
import { useData } from "vitepress";
import NavigationBar from "./components/NavigationBar.vue";
import SiteFooter from "./components/SiteFooter.vue";
import HomeLayout from "./layouts/HomeLayout.vue";
import NotFound from "./layouts/NotFound.vue";
import PageLayout from "./layouts/PageLayout.vue";
import type { ThemeConfig } from "./types";

const { page, frontmatter, theme } = useData<ThemeConfig>();

// A hello for anyone who opens the browser console.
onMounted(() =>
  console.log(
    `%c👀 Curious? Let's talk: ${theme.value.profile.linkedInUrl}`,
    "font-size: 14px; padding: 6px 10px; border-radius: 4px; background: #333; color: #fff;",
  ),
);
</script>

<template>
  <NavigationBar />
  <main class="mt-20">
    <NotFound v-if="page.isNotFound" />
    <HomeLayout v-else-if="frontmatter.layout === 'home'" />
    <PageLayout v-else />
    <SiteFooter />
  </main>
</template>
