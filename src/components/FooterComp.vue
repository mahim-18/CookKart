<template>
  <footer>
    <Toolbar class="bg-black rounded-none border-0 pt-0 pb-0">
      <template #start>
        <div
          class="flex items-center font-semibold text-white border-transparent bg-transparent text-xs"
        >
          Cookkart © 2026
        </div>
      </template>

      <template #end>
        <div class="flex items-center gap-1">
          <RouterLink to="/about">
            <Button class="text-white font-semibold border-transparent bg-transparent text-xs" text>
              About
            </Button>
          </RouterLink>
          <RouterLink to="/team">
            <Button class="text-white font-semibold border-transparent bg-transparent text-xs" text>
              Team
            </Button>
          </RouterLink>
        </div>
      </template>
    </Toolbar>
  </footer>
</template>
