<template>
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="bg-zinc-900 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-8 sm:rounded-2xl"
    >
      <div class="flex-1 px-2 sm:px-0">
        <i></i>
        <h3 class="text-2xl font-extralight text-white/50 mb-10">Dashboard</h3>
        <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
          <ProgressSummary class="flex-1" />
          <toDo class="flex-1" />
          <StudyGraph class="flex-1" />
        </div>
      </div>
    </div>
  </div>
  <myFooter />
</template>

<script setup>
import myFooter from '@/components/myFooter.vue'
import ProgressSummary from '@/components/dashboard/progressSummary.vue'
import toDo from '@/components/dashboard/toDo.vue'
import StudyGraph from '@/components/dashboard/studyGraph.vue'
</script>
