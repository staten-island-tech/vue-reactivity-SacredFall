<template>
  <div class="timer-display text-center text-9xl font-bold">
    <h1 class="text-white">{{ formattedTime }}</h1>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  timeLeft: {
    type: Number,
    required: true,
  },
})

const formattedTime = computed(() => {
  const minutes = Math.floor(props.timeLeft / 60)
  const seconds = props.timeLeft % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})
</script>
