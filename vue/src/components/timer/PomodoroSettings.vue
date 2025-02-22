<template>
  <div class="pomodoro-settings flex flex-col gap-4 mt-4">
    <label class="flex justify-between items-center text-white">
      Work Duration (minutes):
      <input
        type="number"
        v-model="workDuration"
        class="border border-gray-300 rounded py-1 px-2"
      />
    </label>
    <label class="flex justify-between items-center text-white">
      Break Duration (minutes):
      <input
        type="number"
        v-model="breakDuration"
        class="border border-gray-300 rounded py-1 px-2 ml-3"
      />
    </label>
    <button
      @click="applySettings"
      class="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 hover:cursor-pointer"
    >
      Apply
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const workDuration = ref(25)
const breakDuration = ref(5)

const emit = defineEmits(['apply'])

const applySettings = () => {
  emit('apply', { workDuration: workDuration.value, breakDuration: breakDuration.value })
}
</script>
