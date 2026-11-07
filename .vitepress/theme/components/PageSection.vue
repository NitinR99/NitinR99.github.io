<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  id: string;
  title: string;
  /** Half-height section (the shorter ones further down the page). */
  half?: boolean;
  /** Optional square image shown left of the content, with an icon on top. */
  banner?: { src: string; alt: string; icon: Component };
}>();
</script>

<template>
  <div class="page-container">
    <section
      :id="id"
      class="flex flex-col gap-4 border-x border-dashed p-4"
      :class="half ? 'min-h-[50vh]' : 'min-h-screen'"
    >
      <h2 class="mt-4 text-title font-medium">{{ title }}</h2>
      <div
        v-if="banner"
        class="grid items-center justify-items-center gap-4 md:grid-cols-2 md:gap-0"
      >
        <div class="pointer-events-none relative my-5 select-none">
          <img
            :src="banner.src"
            :alt="banner.alt"
            width="400"
            height="400"
            class="h-[400px] rounded-lg object-cover"
          />
          <component
            :is="banner.icon"
            class="absolute top-1/2 left-1/2 size-20 -translate-1/2 text-white/90"
            aria-hidden="true"
          />
        </div>
        <div class="justify-self-stretch"><slot /></div>
      </div>
      <slot v-else />
    </section>
  </div>
</template>
