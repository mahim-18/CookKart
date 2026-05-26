<script setup lang="ts">
import GroceryCompareCard from '@/components/GroceryCompareCard.vue'
import blinkitData from '@/assets/grocerycomparedata/grocery_blinkit.json'
import instamartData from '@/assets/grocerycomparedata/grocery_instamart.json'
import zeptoData from '@/assets/grocerycomparedata/grocery_zepto.json'
import { ref } from 'vue'

const value = ref('')

interface GroceryInfo {
  id: number
  grocery_name: string
  grocery_category: string
  price_blinkit: number
  price_instamart: number
  price_zepto: number
}

const groceryData = ref<GroceryInfo[]>([])

const dataFetch_search = (productName: string) => {
  if (!productName.trim()) return

  const searchTerm = productName.toLowerCase()

  const itemB = blinkitData.find((item) => item.grocery_name.toLowerCase().includes(searchTerm))
  const itemI = instamartData.find((item) => item.grocery_name.toLowerCase().includes(searchTerm))
  const itemZ = zeptoData.find((item) => item.grocery_name.toLowerCase().includes(searchTerm))

  if (!itemB && !itemI && !itemZ) {
    console.log('No items found')
    return
  }

  const newEntry: GroceryInfo = {
    id: Date.now(),
    grocery_name: itemB?.grocery_name || itemI?.grocery_name || itemZ?.grocery_name || productName,
    grocery_category: itemB?.grocery_category || itemI?.grocery_category || 'General',
    price_blinkit: itemB?.price || 0,
    price_instamart: itemI?.price || 0,
    price_zepto: itemZ?.price || 0,
  }

  groceryData.value.push(newEntry)

  value.value = ''
}
</script>

<template>
  <section class="flex-1 pt-20">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex center-items">
      <div class="grow">
        <div class="mb-4">
          <span class="text-xl lg:text-3xl font-bold">
            <span class="text-tangerine">Grocery </span>
            <span class="text-black">Price Comparison</span>
          </span>
          <span class="block text-base lg:text-xl font-semibold"
            >Compare prices across quick commerce platforms</span
          >
        </div>
        <div
          class="flex gap-2 justify-between animate-fade-right bg-white/20 rounded-xl p-2 shadow-[-2px_0px_20px_rgba(0,0,0,0.1)] max-w-xl mb-4"
        >
          <IconField class="w-full max-w-sm">
            <InputIcon class="pi pi-search text-black" />
            <InputText
              v-model="value"
              placeholder="Search Items to Compare Prices"
              class="w-full h-full text-black placeholder:text-black placeholder:text-sm md:placeholder:text-base rounded-l-lg focus:border-0 shadow-none border-0 bg-transparent"
              variant="outlined"
            />
          </IconField>
          <Button
            @click="dataFetch_search(value)"
            label="Search"
            class="inline-flex items-center justify-center border-0 gap-2 text-sm font-medium shadow py-2 bg-tangerine/50 hover:bg-tangerine text-white px-6 rounded-lg h-11 transition-colors"
          >
          </Button>
        </div>

        <GroceryCompareCard v-for="grocery in groceryData" :key="grocery.id" v-bind="grocery" />
      </div>
    </div>
  </section>
</template>
