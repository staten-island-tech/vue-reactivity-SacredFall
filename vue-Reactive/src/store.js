import { ref, reactive } from 'vue'

const state = reactive({
  tasks: [],
  totalHours: ref(0),
  hoursToday: ref(0),
  weeklyProgress: ref(0),
})

const addTask = (task) => {
  state.tasks.push({ text: task, done: false })
}

const toggleTaskDone = (index) => {
  state.tasks[index].done = !state.tasks[index].done
}

const fetchProgressData = () => {
  state.totalHours.value = 120
  state.hoursToday.value = 3
  state.weeklyProgress.value = 75
}

export const useStore = () => {
  return {
    state,
    addTask,
    toggleTaskDone,
    fetchProgressData,
  }
}
