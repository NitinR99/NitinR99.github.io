<script setup lang="ts">
import { useData } from "vitepress";
import { GraduationCap, Handshake, Mail } from "@lucide/vue";
import { data as resume } from "@content/resume.data";
import EntryCard from "../components/EntryCard.vue";
import LandingSection from "../components/LandingSection.vue";
import LinkedInIcon from "../components/LinkedInIcon.vue";
import PageSection from "../components/PageSection.vue";
import SectionNavigator from "../components/SectionNavigator.vue";
import type { HomeFrontmatter, ThemeConfig } from "../types";

const { theme, frontmatter } = useData<ThemeConfig>();
const { profile } = theme.value;
const fm = frontmatter.value as HomeFrontmatter;

const sections = [
  { id: "who-am-i", label: "Who am I?" },
  { id: "work-experience", label: "Work Experience" },
  { id: "academics", label: "Academics" },
  { id: "volunteering", label: "Volunteering" },
];
</script>

<template>
  <LandingSection />
  <hr />

  <PageSection id="work-experience" title="Work experience">
    <EntryCard v-for="(entry, i) in resume.experience" :key="i" :entry="entry" :open="i === 0" />
  </PageSection>
  <hr />

  <PageSection
    id="academics"
    title="Academics"
    half
    :banner="{
      src: '/images/abstract-liquid-2.jpg',
      alt: 'Banner for academics',
      icon: GraduationCap,
    }"
  >
    <EntryCard v-for="(entry, i) in resume.education" :key="i" :entry="entry" />
  </PageSection>
  <hr />

  <PageSection id="volunteering" title="Volunteering" half>
    <EntryCard v-for="(entry, i) in resume.volunteering" :key="i" :entry="entry" />
  </PageSection>
  <hr />

  <PageSection
    id="lets-connect"
    title="Let's Connect"
    half
    :banner="{
      src: '/images/abstract-liquid-1.jpg',
      alt: 'Banner for let\'s connect',
      icon: Handshake,
    }"
  >
    <div class="flex flex-col gap-4">
      <p>{{ fm.reachOut }}</p>
      <div class="flex gap-4 *:flex-1">
        <a class="btn btn-primary" :href="profile.linkedInUrl" target="_blank" rel="noopener">
          <LinkedInIcon /> Connect on LinkedIn
        </a>
        <a class="btn btn-outline" :href="`mailto:${profile.email}`"
          ><Mail /> Reach out via Email</a
        >
      </div>
    </div>
  </PageSection>

  <SectionNavigator :sections="sections" />
</template>
