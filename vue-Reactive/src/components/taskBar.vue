<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.menu-container')) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="absolute top-12 left-12 m-4 menu-container">
    <button class="relative group" @click="toggleMenu">
      <div
        class="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-white hover:ring-1 duration-200 shadow-md"
      >
        <div
          class="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 animate-bounce text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div
          class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3"
        >
          <div
            class="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"
          ></div>
          <div
            class="bg-blue-500 mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"
          ></div>
          <div
            class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"
          ></div>
        </div>
      </div>
    </button>
    <transition name="slide-down">
      <div v-if="isOpen" class="mt-4 space-y-4 flex flex-col items-center">
        <RouterLink
          class="bg-slate-800 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center ring-white hover:ring-1 duration-200 shadow-md"
          to="/"
          title="Home"
        >
          <i class="pi pi-home"></i>
        </RouterLink>
        <RouterLink
          class="bg-slate-800 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center ring-white hover:ring-1 duration-200 shadow-md"
          to="/dashboard"
          title="Dashbaord"
        >
          <i class="pi pi-tablet"></i>
        </RouterLink>
        <RouterLink
          class="bg-slate-800 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center ring-white hover:ring-1 duration-200 shadow-md"
          to="/timer"
          title="Timer"
        >
          <i class="pi pi-clock"></i>
        </RouterLink>
        <RouterLink
          class="bg-slate-800 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center ring-white hover:ring-1 duration-200 shadow-md"
          to="/settings"
          title="Settings"
        >
          <i class="pi pi-cog"></i>
        </RouterLink>
      </div>
    </transition>
  </div>
  <button
    class="display-menu absolute top-12 right-12 m-4 bg-transparent text-white w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-md ring-0 ring-gray-300 hover:ring-1 group-focus:ring-4 ring-opacity-30 duration-200 hover:cursor-pointer"
  >
    <i class="pi pi-moon"></i>
  </button>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
