<script setup lang="ts">
import IconCookkart from './icons/IconCookkart.vue'

import { ref } from 'vue'
const visible = ref(false)
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50">
    <div class="w-full flex justify-center backdrop-blur-2xl bg-white/60 p-1 text-shadow-2xs">
      <div class="max-w-7xl grow">
        <Toolbar class="pt-1.5 pb-1.5 rounded-none border-0 bg-transparent">
          <template #start>
            <RouterLink to="/">
              <div class="flex items-center gap-2">
                <div class="group">
                  <div
                    class="bg-tangerine rounded-lg p-1.5 group-hover:scale-105 transition-transform"
                  >
                    <IconCookkart />
                  </div>
                </div>
                <span class="text-xl font-bold">
                  <span class="text-black">Cook</span>
                  <span class="text-tangerine">Kart</span>
                </span>
              </div>
            </RouterLink>
          </template>

          <template #center>
            <div class="hidden min-[830px]:flex items-center gap-2">
              <Button label="Find Chefs" class="navBtnLink hover:navBtn-hover"> </Button>
              <Button label="AI Recipes" class="navBtnLink hover:navBtn-hover"> </Button>
              <Button label="Meal Planner" class="navBtnLink hover:navBtn-hover"> </Button>
              <RouterLink to="/grocerycompare">
                <Button label="Compare Groceries" class="navBtnLink hover:navBtn-hover"></Button>
              </RouterLink>
            </div>
          </template>

          <template #end>
            <div class="hidden min-[830px]:flex items-center gap-2">
              <Button
                label="Share"
                class="border-transparent bg-transparent text-black hover:border-black"
                outlined
              >
                <i class="pi pi-share-alt"></i>
              </Button>
              <RouterLink to="/about" style="width: 32px; height: 32px">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
              </RouterLink>
            </div>
            <Button
              @click="visible = true"
              icon="pi pi-bars"
              size="large"
              class="min-[830px]:hidden bg-transparent border-0 text-black py-1 hover:navBtn-hover"
            />
          </template>
        </Toolbar>
      </div>
    </div>
  </nav>
  <Drawer v-model:visible="visible" position="right">
    <template #header>
      <div class="flex items-center gap-2">
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
        <span class="font-bold">Amy Elsner</span>
      </div>
    </template>
    <div class="flex flex-col gap-2 items-start">
      <RouterLink to="/" @click="visible = false">
        <Button label="Home" class="navBtnLink hover:navBtn-hover"> </Button>
      </RouterLink>
      <Button label="Find Chefs" class="navBtnLink hover:navBtn-hover"> </Button>
      <Button label="AI Recipes" class="navBtnLink hover:navBtn-hover"> </Button>
      <Button label="Meal Planner" class="navBtnLink hover:navBtn-hover"> </Button>
      <RouterLink to="/grocerycompare" @click="visible = false">
        <Button label="Compare Groceries" class="navBtnLink hover:navBtn-hover"></Button>
      </RouterLink>
    </div>
    <template #footer> </template>
  </Drawer>
</template>
