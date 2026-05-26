<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import chefData from '@/assets/chef_data.json'
import dishesData from '@/assets/chef_index.json'
const route = useRoute()

const handleBooking = () => {
  console.log('Opening booking modal for:', chef_info.value.name)
}

interface ChefInfo {
  id: number
  name: string
  description: string
  rank: number
  tags: string[]
  image: string
}

interface Dish {
  name: string
  img: string
  price: number
}

interface Dishes {
  id: number
  tags: string[]
  dishes: Dish[]
}
const targetID = computed(() => Number(route.params.id))

const chefs = chefData as ChefInfo[]
const dishes = dishesData as Dishes[]

const chef_info = computed<ChefInfo>(() => {
  return (
    chefs.find((user) => user.id === targetID.value) || {
      id: 0,
      name: 'Unknown',
      description: '',
      rank: 0,
      tags: [],
      image: '',
    }
  )
})

const dishes_dat = computed<Dishes>(() => {
  return (
    dishes.find((item) => item.id === targetID.value) || {
      id: 0,
      tags: [],
      dishes: [] as Dish[],
    }
  )
})
</script>

<template>
  <main>
    <section class="flex-1 pt-20">
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex centeritems">
        <div class="grow">
          <section
            class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-2xl shadow-sm p-6 border border-slate-100 mb-8"
          >
            <div class="md:col-span-4 lg:col-span-3">
              <Image
                :src="chef_info.image"
                image-class=" h-full w-full object-cover aspect-square rounded-xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <div class="md:col-span-8 lg:col-span-9 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {{ chef_info.name }}
                </h1>
                <Button
                  label="Book Chef"
                  icon="pi pi-calendar"
                  class="p-button-raised p-button-primary border-0 bg-tangerine hover:bg-tangerine/50 px-6"
                  @click="handleBooking"
                />
              </div>
              <div class="flex items-center gap-2">
                <Rating v-model="chef_info.rank" readonly :cancel="false" />
                <span
                  class="text-xs text-slate-400 font-bold uppercase tracking-wider pt-0.5 font-[Helvetica]"
                  >Verified Chef</span
                >
              </div>

              <p class="text-lg text-slate-600 leading-relaxed max-w-3xl">
                {{ chef_info.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <Tag
                  v-for="tag in chef_info.tags"
                  :key="tag"
                  :value="tag"
                  severity="secondary"
                  class="px-3 py-1 uppercase text-[10px]"
                />
              </div>
            </div>
          </section>

          <section class="space-y-2 mb-5">
            <h2 class="text-2xl font-bold text-slate-800 pb-2">Signature Dishes</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                v-for="dish in dishes_dat.dishes"
                :key="dish.price"
                class="overflow-hidden hover:shadow-md transition-shadow"
              >
                <template #header>
                  <img :src="dish.img" class="w-full h-48 object-cover" />
                </template>
                <template #title>{{ dish.name }}</template>
                <template #content>
                  <p class="text-emerald-600 font-bold text-lg">{{ dish.price }}</p>
                </template>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>
