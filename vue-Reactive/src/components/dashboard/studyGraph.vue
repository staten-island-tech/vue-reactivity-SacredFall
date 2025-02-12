<template>
  <div class="flex flex-col bg-zinc-700 p-4 rounded-md">
    <h4 class="text-white text-xl mb-4">Study Progress</h4>
    <div class="relative w-full h-64">
      <canvas id="studyChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Chart from 'chart.js/auto'

let chartInstance = null

const renderChart = () => {
  const ctx = document.getElementById('studyChart').getContext('2d')
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Total Hours',
          data: [2, 3, 4, 5, 6, 7, 8],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
}

const handleResize = () => {
  if (chartInstance) {
    chartInstance.destroy()
    renderChart()
  }
}

onMounted(() => {
  renderChart()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.relative {
  position: relative;
}
.w-full {
  width: 100%;
}
.h-64 {
  height: 16rem;
}
</style>
