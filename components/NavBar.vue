<template>
  <nav class="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center w-full">
    <div class="theme-menu w-full max-w-6xl mx-auto backdrop-brightness-125 backdrop-blur-xl shadow-xl flex items-center justify-between px-4 py-2 rounded-2xl">
      <!-- Logo -->
      <div class="text-2xl font-[Stardom] font-bold">
        <NuxtLink to="/">notetake</NuxtLink>
      </div>
      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-4 items-center text-sm font-[Satoshi] font-bold">
        <li>
          <button
            class="flex flex-row items-center gap-1 p-1 px-3 rounded-lg hover:bg-white/10"
            @click="$emit('update:mode', 'view'); $emit('handle-parse-click')"
            :class="{ 'border border-dashed': mode === 'view' }"
          >
            <Icon name="hugeicons:presentation-01" class="text-2xl" />
            View
          </button>
        </li>
        <li>
          <button
            class="flex flex-row items-center gap-1 p-1 px-3 rounded-lg hover:bg-white/10"
            @click="$emit('update:mode', 'edit')"
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
            @click.stop="$emit('update:dropdownOpen', !dropdownOpen)"
          >
            <Icon :name="themeIcons[theme]" class="text-2xl" />
          </button>
          <ul
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 backdrop-brightness-125 backdrop-blur-xl shadow-xl rounded-lg py-2 z-50 w-40"
          >
            <li v-for="(icon, themeName) in themeIcons" :key="themeName">
              <div
                class="flex items-center gap-2 px-4 py-2 hover:bg-white/10 cursor-pointer"
                @click="$emit('set-theme', themeName)"
              >
                <Icon :name="icon" class="text-2xl" />
                {{ themeName.charAt(0).toUpperCase() + themeName.slice(1) }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center">
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg hover:bg-white/10">
          <Icon name="line-md:menu" class="text-2xl" />
        </button>
      </div>
      <!-- Mobile Menu -->
      <transition name="fade">
        <ul
          v-if="mobileMenuOpen"
          class="absolute top-20 left-0 w-full bg-gray-800 backdrop-blur-xl shadow-xl rounded-b-2xl py-4 z-50 flex flex-col items-center space-y-2 md:hidden"
        >
          <li>
            <button
              class="flex flex-row items-center gap-1 p-1 px-3 rounded-lg hover:bg-white/10 w-full justify-center"
              @click="$emit('update:mode', 'view'); $emit('handle-parse-click'); mobileMenuOpen = false"
              :class="{ 'border border-dashed': mode === 'view' }"
            >
              <Icon name="hugeicons:presentation-01" class="text-2xl" />
              View
            </button>
          </li>
          <li>
            <button
              class="flex flex-row items-center gap-1 p-1 px-3 rounded-lg hover:bg-white/10 w-full justify-center"
              @click="$emit('update:mode', 'edit'); mobileMenuOpen = false"
              :class="{ 'border border-dashed': mode === 'edit' }"
            >
              <Icon name="line-md:pencil-alt-twotone" class="text-2xl" />
              Edit
            </button>
          </li>
          <li>
            <button
              class="flex flex-row items-center gap-1 p-1 px-3 rounded-lg hover:bg-white/10 w-full justify-center"
              @click.stop="dropdownOpenMobile = !dropdownOpenMobile"
            >
              <Icon :name="themeIcons[theme]" class="text-2xl" />
            </button>
            <ul
              v-if="dropdownOpenMobile"
              class="mt-2 backdrop-brightness-125 backdrop-blur-xl shadow-xl rounded-lg py-2 z-50 w-40 mx-auto"
            >
              <li v-for="(icon, themeName) in themeIcons" :key="themeName">
                <div
                  class="flex items-center gap-2 px-4 py-2 hover:bg-white/10 cursor-pointer"
                  @click="$emit('set-theme', themeName); dropdownOpenMobile = false; mobileMenuOpen = false"
                >
                  <Icon :name="icon" class="text-2xl" />
                  {{ themeName.charAt(0).toUpperCase() + themeName.slice(1) }}
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps([
  'mode',
  'theme',
  'themeIcons',
  'dropdownOpen'
])
const emit = defineEmits([
  'update:mode',
  'update:dropdownOpen',
  'set-theme',
  'handle-parse-click'
])

const mobileMenuOpen = ref(false)
const dropdownOpenMobile = ref(false)

watch(mobileMenuOpen, (val) => {
  if (!val) dropdownOpenMobile.value = false
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>