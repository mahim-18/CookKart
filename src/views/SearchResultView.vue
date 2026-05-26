<script setup lang="ts">
import SearchResultCard from '@/components/SearchResultCard.vue'
import { ref } from 'vue'
import chefData from '@/assets/chef_data.json'
const value = ref('')
</script>

<template>
  <main>
    <section class="flex-1 pt-20">
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex center-items">
        <div class="grow">
          <div
            class="flex gap-2 justify-between animate-fade-right bg-white/20 rounded-xl p-2 shadow-[-2px_0px_20px_rgba(0,0,0,0.1)] max-w-xl mb-4"
          >
            <IconField class="w-full max-w-sm">
              <InputIcon class="pi pi-search text-black" />
              <InputText
                v-model="value"
                placeholder="Search.. Chefs, Cuisines, Dishes"
                class="w-full h-full text-black placeholder:text-black placeholder:text-sm md:placeholder:text-base rounded-l-lg focus:border-0 shadow-none border-0 bg-transparent"
                variant="outlined"
              />
            </IconField>
            <RouterLink to="/searchresults">
              <Button
                label="Search"
                class="inline-flex items-center justify-center border-0 gap-2 text-sm font-medium shadow py-2 bg-tangerine/50 hover:bg-tangerine text-white px-6 rounded-lg h-11 transition-colors"
              >
              </Button>
            </RouterLink>
          </div>

          <div class="block mb-1">
            <span class="text-sm">Found 20 Results</span>
          </div>

          <SearchResultCard v-for="chef in chefData" :key="chef.id" v-bind="chef" />
        </div>
      </div>
    </section>
  </main>
</template>
