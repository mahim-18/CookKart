<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <section class="flex-1 pt-14">
    <div class="relative h-150 md:h-162.5 overflow-hidden">
      <div class="absolute inset-0">
        <Image
          src="/images/w_gustavofring.jpg"
          image-class="block h-full w-full object-cover object-[60%_center]"
        />
        <div class="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-white/0"></div>
      </div>

      <!--   -->

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div class="max-w-2xl">
          <div class="animate-fade-right">
            <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              <span class="block md:inline">Discover </span>
              <span class="block md:inline">Home Chefs </span>
              <span class="block text-[#FC8019]">Near You</span>
            </h1>
            <p
              class="lg:text-xl sm:text-base md:text-lg text-white mb-7 sm:leading-6 md:leading-7 lg:leading-relaxed font-[Helvetica]"
            >
              <span class="block"> Fresh, homemade meals prepared by verified home chefs. </span>
              <span class="block"> Book a personal chef for any occasion. </span>
            </p>
          </div>
          <div
            class="flex gap-2 justify-between animate-fade-right backdrop-blur-2xl bg-white/20 rounded-xl p-2 shadow-2xl max-w-xl"
          >
            <IconField class="w-full max-w-sm">
              <InputIcon class="pi pi-search text-white" />
              <InputText
                v-model="value"
                placeholder="Search.. Chefs, Cuisines, Dishes"
                class="w-full h-full text-white placeholder:text-white placeholder:text-sm md:placeholder:text-base rounded-l-lg focus:border-0 shadow-none border-0 bg-transparent"
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
          <div class="flex flex-wrap gap-2 mt-4">
            <Chip label="Biryani Chef" class="heroSuggestChip" />
            <Chip label="Italian Cuisine" class="heroSuggestChip" />
            <Chip label="Sushi Master" class="heroSuggestChip" />
            <Chip label="Home Baker" class="heroSuggestChip" />
            <Chip label="Healthy Meals" class="heroSuggestChip" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
