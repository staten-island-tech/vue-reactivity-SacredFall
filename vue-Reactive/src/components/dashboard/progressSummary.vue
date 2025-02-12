<template>
  <div class="flex flex-col bg-zinc-800 p-4 rounded-md">
    <h4 class="text-white text-xl">{{ greeting }}</h4>
    <p class="text-white/50">Today is {{ currentDate }}.</p>
    <p class="text-white/50">Current time: {{ currentTime }}</p>
    <hr class="border-t border-white/50 my-4" />
    <h4 class="text-white text-xl">Progress Summary</h4>
    <p class="text-white/50">Total Hours: {{ totalHours }}</p>
    <p class="text-white/50">Hours Studied Today: {{ hoursToday }}</p>
    <p class="text-white/50">Weekly Progress: {{ weeklyProgress }}%</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const totalHours = ref(0)
const hoursToday = ref(0)
const weeklyProgress = ref(0)

// Mock data for demonstration
const fetchProgressData = () => {
  totalHours.value = 120
  hoursToday.value = 3
  weeklyProgress.value = 75
}

onMounted(() => {
  fetchProgressData()
})

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
