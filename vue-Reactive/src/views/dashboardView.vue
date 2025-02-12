<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="bg-zinc-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl"
    >
      <div class="flex-1 px-2 sm:px-0">
        <i></i>
        <h3 class="text-2xl font-extralight text-white/50 mb-10">Dashboard</h3>
        <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
          <ProgressSummary class="flex-1" />
          <MotivationalMessage class="flex-1" />
          <StudyGraph class="flex-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgressSummary from '@/components/dashboard/progressSummary.vue'
import MotivationalMessage from '@/components/dashboard/motivationMessage.vue'
import StudyGraph from '@/components/dashboard/studyGraph.vue'
</script>
