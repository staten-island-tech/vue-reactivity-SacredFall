<template>
  <div class="flex flex-col items-center justify-center gap-8 p-8 h-screen">
    <div v-if="!isTimerRunning" class="flex flex-col items-center justify-center">
      <PomodoroSettings @apply="applySettings" />
      <TimerControls @start="startTimer" />
    </div>
    <div v-else class="flex flex-col items-center justify-center">
      <TimerDisplay :timeLeft="timeLeft" />
      <button @click="closeTimer" class="pi pi-times text-white mt-5 hover:cursor-pointer"></button>
    </div>
    <div
      v-if="showConfirmationMessage"
      class="absolute top-10 bg-slate-800 text-white py-2 px-4 rounded mt-4"
    >
      Settings applied successfully!
    </div>
    <div
      v-if="showTimerMessage"
      class="absolute top-10 bg-slate-800 text-white py-2 px-4 rounded mt-4"
    >
      Timer Updated!
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import TimerDisplay from '../components/timer/TimerDisplay.vue'
import TimerControls from '../components/timer/TimerControls.vue'
import PomodoroSettings from '../components/timer/PomodoroSettings.vue'

const store = inject('store')

const timeLeft = ref(1500) // Default to 25 minutes
const timer = ref(null)
const workDuration = ref(Math.round(25) * 60)
const breakDuration = ref(Math.round(5) * 60)
const isWorkSession = ref(true)
const isTimerRunning = ref(false)
const showConfirmationMessage = ref(false)
const showTimerMessage = ref(false)

const audio = new Audio('/ding.mp3')

const startTimer = () => {
  if (timer.value) return
  isTimerRunning.value = true
  timer.value = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
      updateStoreTimerTime()
    } else {
      clearInterval(timer.value)
      timer.value = null
      isWorkSession.value = !isWorkSession.value
      timeLeft.value = isWorkSession.value ? workDuration.value : breakDuration.value
      audio.play()
      updateStoreHours()
      startTimer() // Automatically start the next session
    }
  }, 1000)
}

const resetTimer = () => {
  clearInterval(timer.value)
  timer.value = null
  timeLeft.value = isWorkSession.value ? workDuration.value : breakDuration.value
  isTimerRunning.value = false
}

const closeTimer = () => {
  resetTimer()
  isTimerRunning.value = false
}

const applySettings = ({ workDuration: newWorkDuration, breakDuration: newBreakDuration }) => {
  workDuration.value = Math.round(newWorkDuration * 60)
  breakDuration.value = Math.round(newBreakDuration * 60)
  console.log('Settings applied')
  resetTimer()
  showConfirmation()
}

const showConfirmation = () => {
  showConfirmationMessage.value = true
  setTimeout(() => {
    showConfirmationMessage.value = false
  }, 3000)
}
const timerConfirmation = () => {
  showTimerMessage.value = true
  setTimeout(() => {
    showTimerMessage.value = false
  }, 3000)
}

const updateStoreTimerTime = () => {
  store.updateTimerTime(timeLeft.value)
}

const updateStoreHours = () => {
  const hoursStudied = Math.max(0, (workDuration.value - timeLeft.value) / 3600)
  store.updateHoursToday(store.hoursToday.value + hoursStudied)
  store.updateTotalHours(store.totalHours.value + hoursStudied)
  updateWeeklyHoursInStore(hoursStudied)
  timerConfirmation()
}

const updateWeeklyHoursInStore = (hoursStudied) => {
  const newWeeklyHours = [...store.weeklyHours.value]
  newWeeklyHours[newWeeklyHours.length - 1] += parseFloat(hoursStudied)
  store.updateWeeklyHours(newWeeklyHours)
}

onMounted(() => {
  timeLeft.value = workDuration.value
})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>
