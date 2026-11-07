<script setup lang="ts">
import { ExternalLink, FileText } from "@lucide/vue";

// Put inside any link with target="_blank". The visually hidden text tells
// screen-reader users that the link opens a new tab (and when it is a PDF).
defineProps<{ pdf?: boolean }>();
</script>

<template>
  <span class="new-tab-icon">
    <FileText v-if="pdf" aria-hidden="true" />
    <ExternalLink v-else aria-hidden="true" />
    <span class="sr-only">{{ pdf ? " (PDF, opens in a new tab)" : " (opens in a new tab)" }}</span>
  </span>
</template>
