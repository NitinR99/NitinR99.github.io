<script setup lang="ts">
import { Plus } from "@lucide/vue";
import type { Entry } from "@content/resume.data";

defineProps<{ entry: Entry; open?: boolean }>();
</script>

<!-- One résumé row. Click to expand the markdown details. -->
<template>
  <details class="group border-b last:border-b-0" :open="open">
    <summary
      class="grid cursor-pointer list-none grid-cols-[1fr_auto] items-start gap-x-6 gap-y-1 py-6 group-first-of-type:pt-1 sm:grid-cols-[9rem_1fr_auto]"
    >
      <span v-if="entry.dates" class="pt-1 text-sm text-subtle tabular-nums">
        {{ entry.dates }}
      </span>
      <!-- Without dates the title takes the date column too. -->
      <div class="min-w-0" :class="{ 'sm:col-span-2': !entry.dates }">
        <h3 class="text-xl leading-snug">
          {{ entry.title }}
        </h3>
        <p class="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
          <img
            class="size-5 rounded object-cover"
            :src="entry.logo"
            alt=""
            width="20"
            height="20"
            loading="lazy"
          />
          <a class="link" :href="entry.website" target="_blank" rel="noopener">
            {{ entry.organization }}
          </a>
          <template v-if="entry.location"
            ><span aria-hidden="true">·</span>{{ entry.location }}</template
          >
          <template v-if="entry.badge"><span aria-hidden="true">·</span>{{ entry.badge }}</template>
        </p>
      </div>
      <span
        class="btn-icon -mt-0.5 row-start-1 col-start-2 sm:col-start-3 group-open:text-foreground"
        aria-hidden="true"
      >
        <Plus class="transition-transform duration-300 group-open:rotate-45" />
      </span>
    </summary>
    <div
      class="prose max-w-[68ch] pb-8 leading-relaxed prose-p:my-3 [&_li>p]:my-0 prose-li:my-2 prose-hr:my-6"
      :class="{ 'sm:ml-[calc(9rem+1.5rem)]': entry.dates }"
      v-html="entry.details"
    />
  </details>
</template>
