<script setup>
import myFooter from '@/components/myFooter.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <span class="hover:cursor-none">FIANANT</span>
    <p class="caption">A simplistic financial manager</p>
  </div>
  <myFooter />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap');

body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: black;
  height: 100vh;
  width: 100vw;
  background-color: slategray;
}

span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  color: royalblue;
  font-size: 124px;
  letter-spacing: 8px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

span::before {
  content: 'FIANANT';
  position: absolute;
  color: transparent;
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent 2px,
    white 2px,
    white 4px
  );
  -webkit-background-clip: text;
  background-clip: text;
  top: 0px;
  left: 0;
  z-index: -1;
  transition: 1s;
}

span::after {
  content: 'FIANANT';
  position: absolute;
  color: transparent;
  background-image: repeating-linear-gradient(
    135deg,
    transparent 0,
    transparent 2px,
    white 2px,
    white 4px
  );
  -webkit-background-clip: text;
  background-clip: text;
  top: 0px;
  left: 0px;
  transition: 1s;
}

span:hover:before {
  top: 10px;
  left: 10px;
}

span:hover:after {
  top: -10px;
  left: -10px;
}

.caption {
  position: absolute;
  top: 56%;
  transform: translateX(0%);
  color: white;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
}
</style>
