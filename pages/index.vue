<template>
  <div class="theme-box flex-grow min-h-[90dvh] flex flex-col items-center justify-center bg-gray-700 p-4">
    <textarea class="txtarea w-11/12 flex-grow flex flex-col items-center justify-center bg-gray-800 rounded-lg max-h-[90vh]">
      
    </textarea>
  </div>
</template>

<script setup lang="ts">

const { theme, setTheme } = useTheme()
const selected = ref(theme.value)


</script>


<style>
</style>