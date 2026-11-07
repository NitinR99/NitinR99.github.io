<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{ sections: { id: string; label: string }[] }>();
const active = ref(props.sections[0]?.id);

// Highlight the section crossing the middle of the viewport.
let observer: IntersectionObserver | undefined;
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (active.value = e.target.id)),
    { rootMargin: "-50% 0px -50% 0px" },
  );
  for (const { id } of props.sections) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  }
});
onUnmounted(() => observer?.disconnect());
</script>

<template>
  <nav
    class="fixed top-1/2 left-2 flex -translate-y-1/2 flex-col gap-2 rounded-lg bg-border p-2 max-md:hidden"
    aria-label="Sections"
  >
    <a
      v-for="s in sections"
      :key="s.id"
      :href="`#${s.id}`"
      :title="s.label"
      :aria-label="s.label"
      :aria-current="active === s.id"
      class="block h-9 w-2 scale-60 rounded-lg bg-[#bdbdbd] transition-all hover:bg-primary/85 aria-[current=true]:scale-100 aria-[current=true]:bg-primary"
    />
  </nav>
</template>
