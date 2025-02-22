<template>
  <div class="flex flex-col bg-zinc-800 p-4 rounded-md">
    <h4 class="text-white text-xl">{{ greeting }}</h4>
    <p class="text-white/50">Today is {{ currentDate }}.</p>
    <p class="text-white/50">Current time: {{ currentTime }}</p>
    <hr class="border-t border-white/50 my-4" />
    <h4 class="text-white text-xl">Progress Summary</h4>
    <p class="text-white/50">Total Hours: {{ totalHours.toFixed(3) }}</p>
    <p class="text-white/50">Hours Studied Today: {{ hoursToday.toFixed(3) }}</p>
    <p class="text-white/50">Weekly Progress: {{ weeklyProgress }}%</p>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, computed } from 'vue'

const store = inject('store')

const totalHours = computed(() => store.totalHours.value)
const hoursToday = computed(() => store.hoursToday.value)
const weeklyProgress = computed(() => store.weeklyProgress.value)

const currentDate = ref('')
const currentTime = ref('')
const greeting = ref('')

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString(undefined, options)
}

const formatTime = (date) => {
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' }
  return date.toLocaleTimeString(undefined, options)
}

const getGreeting = (date) => {
  const hour = date.getHours()
  if (hour < 12) {
    return 'Good Morning!'
  } else if (hour < 18) {
    return 'Good Afternoon!'
  } else {
    return 'Good Evening!'
  }
}

const updateTime = () => {
  const date = new Date()
  currentTime.value = formatTime(date)
  greeting.value = getGreeting(date)
}

onMounted(() => {
  const date = new Date()
  currentDate.value = formatDate(date)
  updateTime()
  setInterval(updateTime, 1000)
})
</script>
