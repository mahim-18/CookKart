<script setup lang="ts">
interface GroceryInfo {
  id: number
  grocery_name: string
  grocery_category: string
  price_blinkit: number
  price_instamart: number
  price_zepto: number
}
const grocery_info = defineProps<GroceryInfo>()
</script>

<template>
  <Card
    class="w-full max-w-xl shadow-xs border border-gray-200 rounded-xl overflow-hidden bg-white mb-4"
  >
    <template #title>
      <div class="text-center font-bold text-2xl text-gray-800 py-4 border-b border-gray-100">
        {{ grocery_info.grocery_name }}
      </div>
    </template>

    <template #content>
      <div class="grid grid-cols-3 text-center divide-x divide-gray-200 py-4">
        <div class="px-2">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Blinkit</p>
          <p class="text-xl font-bold text-green-600">₹{{ grocery_info.price_blinkit }}</p>
        </div>

        <div class="px-2">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Instamart</p>
          <p class="text-xl font-bold text-orange-500">₹{{ grocery_info.price_instamart }}</p>
        </div>

        <div class="px-2">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Zepto</p>
          <p class="text-xl font-bold text-purple-600">₹{{ grocery_info.price_zepto }}</p>
        </div>
      </div>
    </template>
  </Card>
</template>
