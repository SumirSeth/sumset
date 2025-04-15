<!-- pages/theme-test.vue -->
<template>
  <div>
    <div class="h-screen theme-box">
      <h1 class="text-xl font-bold mb-4">Theme Tester</h1>
      
      <select v-model="selected" @change="setTheme(selected)" class="border px-2 py-1 rounded">
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="nord">Nord</option>
      </select>
      
      <p class="mt-4 text-[var(--text)] bg-[var(--bg)] p-4 rounded">
        The current theme is <strong>{{ theme }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

const { theme, setTheme } = useTheme()

const selected = ref(theme.value)
</script>
