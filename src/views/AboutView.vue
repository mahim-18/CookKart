<script setup lang="ts">
import { ref } from 'vue'

const teamMembers = ref([
  {
    name: 'Mahim Agarwal',
    rollNo: '2200520100128',
    email: '2200520100128@ietlucknow.ac.in',
  },
  {
    name: 'Rahul Singh Kushwaha',
    rollNo: '2200520100141',
    email: '2200520100141@ietlucknow.ac.in',
  },
  {
    name: 'Aradhya Agarwal',
    rollNo: '2200520100111',
    email: '2200520100111@ietlucknow.ac.in',
  },
])
</script>

<template>
  <main
    class="min-h-screen bg-slate-50 text-slate-800 antialiased dark:bg-slate-900 dark:text-slate-100"
  >
    <header
      class="bg-linear-to-r from-tangerine-dark via-tangerine to-orange-500 pt-24 pb-20 text-center text-white px-4"
    >
      <div class="max-w-4xl mx-auto space-y-4">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">Meet Our Team</h1>
        <p class="text-lg text-orange-50 max-w-2xl mx-auto font-medium">
          Final Year Students • Batch 2026 • Session 2025-26
        </p>
        <div class="pt-2">
          <span
            class="inline-flex items-center gap-x-1.5 rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold tracking-wide text-white ring-1 ring-inset ring-white/20 backdrop-blur-xs"
          >
            Department of Computer Science & Engineering
          </span>
        </div>
        <p class="text-sm font-semibold tracking-wider uppercase text-orange-100">
          Institute of Engineering and Technology, Lucknow
        </p>
      </div>
    </header>

    <section class="max-w-6xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="member in teamMembers"
          :key="member.rollNo"
          class="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 dark:shadow-none"
        >
          <!-- Tangerine Accent Border -->
          <div
            class="absolute inset-x-0 top-0 h-1.5 bg-tangerine opacity-90 group-hover:h-2 transition-all"
          ></div>

          <div class="flex flex-col items-start w-full">
            <div
              class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-xl font-bold tracking-normal text-tangerine dark:bg-tangerine/10 dark:text-tangerine"
            >
              {{
                member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
              }}
            </div>

            <h2
              class="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-tangerine transition-colors w-full text-left"
            >
              {{ member.name }}
            </h2>

            <div class="mt-5 w-full rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-900/50">
              <div class="flex items-center justify-between py-1">
                <span class="text-slate-500 dark:text-slate-400 text-left">Roll Number:</span>
                <span class="font-mono font-medium text-slate-700 dark:text-slate-300 text-right">{{
                  member.rollNo
                }}</span>
              </div>
              <div class="flex items-center justify-between py-1">
                <span class="text-slate-500 dark:text-slate-400 text-left">Year:</span>
                <span class="font-medium text-slate-700 dark:text-slate-300 text-right"
                  >4th Year (CSE)</span
                >
              </div>
            </div>
          </div>

          <div class="mt-6 border-t border-slate-100 pt-4 w-full dark:border-slate-700/50">
            <a
              :href="`mailto:${member.email}`"
              class="inline-flex w-full items-center justify-center gap-x-2 rounded-xl bg-slate-100 px-3 py-2.5 text-xs font-semibold tracking-wide text-slate-700 hover:bg-tangerine hover:text-white dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-tangerine dark:hover:text-white transition-all"
            >
              <span>Contact Member</span>
              <svg
                class="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>

    <footer
      class="border-t border-slate-200 py-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400"
    >
      <p>All rights reserved.</p>
    </footer>
  </main>
</template>
