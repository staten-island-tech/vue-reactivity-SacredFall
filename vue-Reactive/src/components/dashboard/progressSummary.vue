<template>
  <div class="flex flex-col bg-zinc-700 p-4 rounded-md">
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
</script>
