<template>
  <div class="theme-box flex-grow min-h-[90dvh] flex flex-col items-center justify-center bg-gray-700 p-4">
    <textarea class="theme-txtarea w-11/12 flex-grow flex flex-col items-center justify-center bg-gray-800 rounded-lg max-h-[90vh] focus:outline-none p-4 resize-none" placeholder="Start wrtiting..." v-model="text">
      
    </textarea>
  </div>
</template>

<script setup lang="ts">

const { theme, setTheme } = useTheme()
const selected = ref(theme.value)
const text = ref('')


</script>


<style>
</style>