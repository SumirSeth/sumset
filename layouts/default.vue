<template>
  <div class="theme-box min-h-screen flex flex-col">
    <NavBar
      :mode="mode"
      :theme="theme"
      :theme-icons="themeIcons"
      :dropdown-open="dropdownOpen"
      @update:mode="mode = $event"
      @update:dropdownOpen="dropdownOpen = $event"
      @set-theme="setTheme"
      @handle-parse-click="handleParseClick"
    />
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { theme, setTheme } = useTheme()
const mode = ref('edit')
const dropdownOpen = ref(false)

const themeIcons = {
  dark: 'line-md:moon-rising-twotone-alt-loop',
  light: 'line-md:sun-rising-twotone-loop',
  nord: 'icon-park-twotone:mountain',
  auto: 'ic:twotone-auto-awesome',
}

const handleParseClick = () => {}

function closeDropdown(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (!target.closest('.relative')) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropdown)
})
onUnmounted(() => {
  window.removeEventListener('click', closeDropdown)
})
</script>