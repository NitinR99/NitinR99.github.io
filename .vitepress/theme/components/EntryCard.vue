<script setup lang="ts">
import { ChevronDown } from "@lucide/vue";
import type { Entry } from "@content/resume.data";

defineProps<{ entry: Entry; open?: boolean }>();
</script>

<template>
  <details class="group" :open="open">
    <summary class="flex cursor-pointer list-none items-center gap-4 p-4">
      <img
        class="size-8 shrink-0 rounded-lg object-cover"
        :src="entry.logo"
        :alt="`Logo of ${entry.organization}`"
        width="32"
        height="32"
      />
      <div class="flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <h3 class="leading-[1.334]">{{ entry.title }}</h3>
          <span v-if="entry.badge" class="chip chip-outline">{{ entry.badge }}</span>
        </div>
        <a class="text-muted-foreground" :href="entry.website" target="_blank" rel="noopener">
          {{ entry.organization }}
        </a>
        <div v-if="entry.dates" class="text-small text-muted-foreground">{{ entry.dates }}</div>
        <div v-if="entry.location" class="text-small text-muted-foreground">
          {{ entry.location }}
        </div>
      </div>
      <span class="btn-icon -mt-1 -mr-2 self-start">
        <ChevronDown class="transition-transform group-open:rotate-180" />
      </span>
    </summary>
    <div
      class="prose prose-sm max-w-none px-4 pt-4 pb-6 prose-neutral dark:prose-invert"
      v-html="entry.details"
    />
  </details>
</template>
