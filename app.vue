<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
try {
  document.documentElement.classList.remove('no-theme-transition');
} catch (e) {}
</script>
