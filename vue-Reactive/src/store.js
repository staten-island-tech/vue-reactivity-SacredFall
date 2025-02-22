import { ref, watch } from 'vue'

// Load state from localStorage
const loadState = (key, defaultValue) => {
  const saved = localStorage.getItem(key)
  return saved ? JSON.parse(saved) : defaultValue
}

const totalHours = ref(loadState('totalHours', 0))
const hoursToday = ref(loadState('hoursToday', 0))
const weeklyProgress = ref(loadState('weeklyProgress', 0))
const timerTime = ref(loadState('timerTime', 0))
const weeklyHours = ref(loadState('weeklyHours', [0, 0, 0, 0, 0, 0, 0]))
const lastRecordedDate = ref(loadState('lastRecordedDate', new Date().toISOString().split('T')[0]))

let totalHoursFromWeekly = weeklyHours.value.reduce((acc, hours) => acc + hours, 0)
totalHours.value = totalHoursFromWeekly
hoursToday.value = weeklyHours.value[weeklyHours.value.length - 1]

// Save state to localStorage
const saveState = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const updateTotalHours = (hours) => {
  totalHours.value = hours
  saveState('totalHours', totalHours.value)
}

const updateHoursToday = (hours) => {
  const lastIndex = weeklyHours.value.length - 1
  totalHours.value += hours - weeklyHours.value[lastIndex]
  weeklyHours.value[lastIndex] = hours
  hoursToday.value = hours
  saveState('totalHours', totalHours.value)
  saveState('hoursToday', hoursToday.value)
  saveState('weeklyHours', weeklyHours.value)
}

const updateWeeklyProgress = (progress) => {
  weeklyProgress.value = progress
  saveState('weeklyProgress', weeklyProgress.value)
}

const updateTimerTime = (time) => {
  timerTime.value = time
  saveState('timerTime', timerTime.value)
}

const updateWeeklyHours = (hoursArray) => {
  const oldTotalHoursFromWeekly = totalHoursFromWeekly
  totalHoursFromWeekly = hoursArray.reduce((acc, hours) => acc + hours, 0)
  totalHours.value += totalHoursFromWeekly - oldTotalHoursFromWeekly
  weeklyHours.value = hoursArray
  hoursToday.value = hoursArray[hoursArray.length - 1]
  saveState('totalHours', totalHours.value)
  saveState('hoursToday', hoursToday.value)
  saveState('weeklyHours', weeklyHours.value)
}

// Function to check for a new day and update weeklyHours
const checkForNewDay = () => {
  const currentDate = new Date().toISOString().split('T')[0]
  if (currentDate !== lastRecordedDate.value) {
    // Shift the weeklyHours array to the left and add a new day with 0 hours
    weeklyHours.value.shift()
    weeklyHours.value.push(0)
    hoursToday.value = 0
    lastRecordedDate.value = currentDate
    saveState('weeklyHours', weeklyHours.value)
    saveState('hoursToday', hoursToday.value)
    saveState('lastRecordedDate', lastRecordedDate.value)
  }
}

// Set an interval to check for a new day every minute
setInterval(checkForNewDay, 60000)

export const useStore = () => {
  return {
    totalHours,
    hoursToday,
    weeklyProgress,
    timerTime,
    weeklyHours,
    updateTotalHours,
    updateHoursToday,
    updateWeeklyProgress,
    updateTimerTime,
    updateWeeklyHours,
  }
}

// Watch for changes in weeklyHours and update totalHours and hoursToday accordingly
watch(weeklyHours, (newWeeklyHours) => {
  const oldTotalHoursFromWeekly = totalHoursFromWeekly
  totalHoursFromWeekly = newWeeklyHours.reduce((acc, hours) => acc + hours, 0)
  totalHours.value += totalHoursFromWeekly - oldTotalHoursFromWeekly
  hoursToday.value = newWeeklyHours[newWeeklyHours.length - 1]
  saveState('totalHours', totalHours.value)
  saveState('hoursToday', hoursToday.value)
  saveState('weeklyHours', weeklyHours.value)
})
