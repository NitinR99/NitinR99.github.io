<script setup lang="ts">
defineProps<{ id: string; title: string }>();
</script>

<!-- Editorial two-column section: heading on the left, content on the right. -->
<template>
  <section :id="id" class="page-container">
    <div class="grid gap-x-12 gap-y-8 border-t py-16 md:grid-cols-[1fr_3fr] md:py-24">
      <h2 class="text-3xl md:sticky md:top-24 md:self-start">{{ title }}</h2>
      <div><slot /></div>
    </div>
  </section>
</template>
