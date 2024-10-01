<script setup>
import './index.css';
import { ref } from 'vue';

import SlotComponent from './components/SlotComponent.vue';

</script>

<template>

  <SlotComponent>
    <h1>Content</h1>
  </SlotComponent>


</template>

<style scoped>
/* Add your styles here */
</style>
