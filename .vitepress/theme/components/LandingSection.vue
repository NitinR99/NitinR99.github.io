<script setup lang="ts">
import { useData } from "vitepress";
import { FileText } from "@lucide/vue";
import LinkedInIcon from "./LinkedInIcon.vue";
import type { HomeFrontmatter, ThemeConfig } from "../types";

const { theme, frontmatter } = useData<ThemeConfig>();
const { profile, year } = theme.value;
const fm = frontmatter.value as HomeFrontmatter;
</script>

<template>
  <div class="page-container">
    <section id="who-am-i" class="flex min-h-screen items-center p-4">
      <div class="grid w-full gap-16 md:grid-cols-2 md:gap-0">
        <div class="flex flex-col gap-4">
          <p>{{ profile.jobTitle }} / {{ year }}</p>
          <h1 class="text-display font-semibold">
            {{ profile.firstName }} <span class="text-subtle">{{ profile.lastName }}</span>
          </h1>
          <p>
            {{ fm.subtitle }}<br />
            <strong>{{ profile.topFour.join(", ") }}</strong
            >.
          </p>
          <p class="text-small">🟢 Working full-time in {{ profile.workingIn }}.</p>
          <div class="flex gap-2">
            <a class="btn btn-primary" :href="profile.resumeUrl" target="_blank"
              ><FileText /> Resume</a
            >
            <a class="btn btn-outline" :href="profile.linkedInUrl" target="_blank" rel="noopener">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>

        <div
          class="flex flex-col gap-3 self-end *:flex *:flex-col *:gap-4 [&_h2]:text-title [&_h2]:font-medium [&_h2]:text-subtle"
        >
          <div>
            <h2>What I do</h2>
            <p>{{ fm.whatIDo.threeThings.join(" - ") }}<br />{{ fm.whatIDo.subtitle }}</p>
          </div>
          <div>
            <h2>My focus</h2>
            <div class="flex flex-wrap gap-x-1 gap-y-2 py-1">
              <span v-for="focus in fm.myFocus" :key="focus" class="chip">{{ focus }}</span>
            </div>
          </div>
          <div>
            <h2>How I think</h2>
            <ul class="list-[circle] py-0.5">
              <li v-for="item in fm.howIThink" :key="item" class="ml-5 py-[9px] pr-4 text-small">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
