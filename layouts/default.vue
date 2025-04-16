<template>
  <div class="theme-box min-h-screen flex flex-col bg-white">
    <div class="menu flex flex-row items-center justify-center p-4">
      <button class="p-3 border rounded-2xl" @click="setTheme('light')">
        light
      </button>
      
      <button class="p-3 border rounded-2xl" @click="setTheme('dark')">
        dark
      </button>
      
      <button class="p-3 border rounded-2xl" @click="setTheme('nord')">
        nord
      </button>
      
      <button class="p-3 border rounded-2xl" @click="setTheme('auto')">
        auto
      </button>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>

const { theme, setTheme } = useTheme()

</script>

<style>

</style>