<template>
  <div class="flex flex-col space-y-2 relative">
    <div class="flex flex-row bg-zinc-800 p-4 rounded-md justify-between items-center">
      <h4 class="text-white text-xl">Tasks:</h4>
      <button
        @click="showModal = true"
        class="p-2 bg-white pi pi-plus hover:cursor-pointer rounded-2xl hover:ring-4 ring-zinc-500"
      ></button>
    </div>

    <toDoCard
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @delete-task="deleteTask"
      @toggle-completed="toggleCompleted"
    />

    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-50"
    >
      <div class="bg-zinc-800 p-6 rounded-md shadow-md z-50">
        <h4 class="text-xl mb-4 text-white">Add New Task</h4>
        <input
          v-model="newTaskText"
          type="text"
          placeholder="Enter new task"
          class="p-2 border rounded-md w-full mb-4 text-white"
        />
        <div class="flex justify-end space-x-2">
          <button @click="showModal = false" class="p-2 bg-gray-300 rounded-md">Cancel</button>
          <button @click="addTask" class="p-2 bg-blue-500 text-white rounded-md">Add Task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import toDoCard from '../toDoCard.vue'

const tasks = ref([])
const newTaskText = ref('')
const showModal = ref(false)

const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks')
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks)
  }
}

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

const addTask = () => {
  if (newTaskText.value.trim() === '') {
    return
  }

  const newTask = {
    id: Date.now(),
    text: newTaskText.value,
    completed: false,
    timestamp: new Date().toLocaleString(),
  }
  tasks.value.push(newTask)
  newTaskText.value = ''
  showModal.value = false
  saveTasks()
}

const deleteTask = (taskToDelete) => {
  tasks.value = tasks.value.filter((task) => task.id !== taskToDelete.id)
  saveTasks()
}

const toggleCompleted = (taskToToggle) => {
  const task = tasks.value.find((task) => task.id === taskToToggle.id)
  if (task) {
    task.completed = !task.completed
  }
  saveTasks()
}

onMounted(loadTasks)
</script>
