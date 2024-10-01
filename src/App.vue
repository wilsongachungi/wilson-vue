<script setup>
import './index.css';
import { ref } from 'vue';

import SlotComponent from './components/SlotComponent.vue';
import FallbackContent from './components/FallbackContent.vue';

</script>

<template>

  <SlotComponent>
    <h1>Content</h1>
  </SlotComponent>

  <hr>

  <FallbackContent>
    <p>Component will not show because we are calling the paragraph direcly</p>
  </FallbackContent>


</template>

<style scoped>
/* Add your styles here */
</style>
