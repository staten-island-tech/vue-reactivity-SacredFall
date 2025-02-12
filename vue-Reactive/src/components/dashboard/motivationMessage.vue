<template>
  <div class="flex flex-col bg-zinc-700 p-4 rounded-md">
    <h4 class="text-white text-xl">Keep Going!</h4>
    <p class="text-white/50">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const message = ref('')

// Mock data for demonstration
const fetchMotivationalMessage = () => {
  message.value = "You're doing great! Keep up the good work!"
}

onMounted(() => {
  fetchMotivationalMessage()
})
</script>
