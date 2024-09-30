<script setup>
import './index.css';
import { ref } from 'vue';


import ComponentEvent from './components/ComponentEvent.vue';

let count = ref(0)
</script>

<template>


  <h1>Count: {{ count }}</h1> 
  
<ComponentEvent @incrementCounter="count++"/>

</template>

<style scoped>
/* Add your styles here */
</style>
