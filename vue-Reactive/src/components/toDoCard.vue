<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    default: () => ({
      text: '',
      completed: false,
      timestamp: '',
    }),
  },
})

const emit = defineEmits(['delete-task', 'toggle-completed'])

const handleDelete = () => {
  emit('delete-task', props.task)
}

const handleToggle = () => {
  emit('toggle-completed', props.task)
}
</script>

<template>
  <div class="flex items-center p-4 bg-transparent rounded-md mb-4 text-white">
    <div class="flex-grow">
      <span :class="{ 'line-through text-gray-500': task.completed }">
        {{ task.text }}
      </span>
      <div class="text-sm text-gray-400">
        {{ task.timestamp }}
      </div>
    </div>
    <input type="checkbox" :checked="task.completed" @change="handleToggle" class="mr-4" />
    <button
      @click="handleDelete"
      class="ml-4 text-white p-2 hover:bg-red-600 rounded-3xl pi pi-times"
    ></button>
  </div>
</template>
