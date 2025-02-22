<template>
  <div class="timer-controls flex justify-center gap-4 mt-4">
    <button
      @click="startTimer"
      class="bg-cyan-800 text-white py-2 px-4 rounded hover:bg-cyan-700 hover:cursor-pointer"
    >
      Start
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['start', 'pause', 'reset'])

const startTimer = () => {
  emit('start')
}
</script>
