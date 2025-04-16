<template>
  <div class="theme-box min-h-screen flex flex-col">
    <nav class="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center">
      <div class="theme-menu backdrop-brightness-125 backdrop-blur-xl shadow-xl flex items-center lg:space-x-8 space-x-6 lg:px-8 px-6 py-2 rounded-2xl max-w-max">
        <div class="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Stardom] font-bold text-white">
          <NuxtLink to="/">notetake</NuxtLink>
        </div>
        <ul class="flex lg:space-x-6 space-x-4 text-white items-center 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm text-sm font-[Satoshi] font-bold">
          <li>
            <button
              class="flex flex-row items-center gap-1 p-1 px-3 rounded-lg hover:bg-white/10"
              @click="mode = 'view'; handleParseClick()"
              :class="{ 'border border-dashed': mode === 'view' }"
            >
              <Icon name="hugeicons:presentation-01" class="text-2xl" />
              View
            </button>
          </li>
          <li>
            <button
              class="flex flex-row items-center gap-1 p-1 px-3 rounded-lg hover:bg-white/10"
              @click="mode = 'edit'"
              :class="{ 'border border-dashed': mode === 'edit' }"
            >
              <Icon name="line-md:pencil-alt-twotone" class="text-2xl" />
              Edit
            </button>
          </li>
          <!-- Theme selector dropdown -->
          <li class="relative">
            <button
              class="flex flex-row items-center gap-1 p-1 px-3 rounded-lg hover:bg-white/10"
              @click.stop="dropdownOpen = !dropdownOpen"
            >
              <Icon :name="themeIcons[theme]" class="text-2xl" />
            </button>
            <ul
              v-if="dropdownOpen"
              class="absolute right-0 mt-2 backdrop-brightness-125 backdrop-blur-xl shadow-xl rounded-lg py-2 z-50 w-40"
            >
              <li v-for="(icon, themeName) in themeIcons" :key="themeName">
                <div
                  class="flex items-center gap-2 px-4 py-2 hover:bg-white/10 text-white cursor-pointer"
                  @click="setTheme(themeName)"
                >
                  <Icon :name="icon" class="text-2xl" />
                  {{ themeName.charAt(0).toUpperCase() + themeName.slice(1) }}
                </div>
              </li>
            </ul>
          </li>
          <!-- End Dropdown -->
        </ul>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup lang="ts">
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