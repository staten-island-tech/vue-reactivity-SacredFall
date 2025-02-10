<script setup>
import { RouterView } from 'vue-router'
import taskBar from '@/components/taskBar.vue'
import myFooter from '@/components/myFooter.vue'
</script>

<template>
  <taskBar />
  <RouterView />
</template>

<style scoped></style>
