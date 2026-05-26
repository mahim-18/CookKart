<script setup lang="ts">
import { useRouter } from 'vue-router'
interface ChefInfo {
  id: number
  name: string
  description: string
  rank: number
  tags: string[]
  image: string
}
const chef_info = defineProps<ChefInfo>()

const router = useRouter()

const dataFetch_redirect = () => {
  router.push({
    name: 'chefprofile',
    params: { id: chef_info.id },
  })
}
</script>

<template>
  <Card
    class="max-w-xl shadow-xs border border-surface-200 overflow-hidden group cursor-pointer mb-4"
    pt:body:class="p-2"
    @click="dataFetch_redirect"
  >
    <template #content>
      <div class="flex flex-row gap-4 items-stretch">
        <div class="shrink-0 w-24 sm:w-32 md:w-40 overflow-hidden">
          <Image
            :src="chef_info.image"
            image-class=" h-full w-full aspect-square object-cover rounded transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        <div class="flex flex-col justify-between py-1 min-w-0">
          <div>
            <h2 class="text-base text-black sm:text-lg font-bold truncate">{{ chef_info.name }}</h2>
            <p class="text-xs sm:text-sm text-surface-600 dark:text-surface-400 line-clamp-4 mt-1">
              {{ chef_info.description }}
            </p>

            <div class="flex items-center mt-2">
              <Rating :model-value="rank" readonly :cancel="false" class="scale-75 origin-left" />
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 mt-3">
            <Tag
              v-for="(chef_tags, index) in chef_info.tags"
              :key="index"
              :value="chef_tags"
              class="text-[10px] px-2 py-0.5"
            />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
