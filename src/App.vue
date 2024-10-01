<script setup>
import './index.css';
import { ref } from 'vue';

import SlotComponent from './components/SlotComponent.vue';
import FallbackContent from './components/FallbackContent.vue';
import NamedSlot from './components/NamedSlot.vue'

</script>

<template>

  <SlotComponent>
    <h1>Content</h1>
  </SlotComponent>

  <hr>

  <FallbackContent>
    <p>Component will not show because we are calling the paragraph direcly</p>
  </FallbackContent>

  <hr>

  <NamedSlot>
    <template v-slot:one>
      <h1>This content will go to slot 'one'</h1>
    </template>

    <template #two>
      <h1>This content will go to slot 'two'</h1>
    </template>
  </NamedSlot>



</template>

<style scoped>
/* Add your styles here */
</style>
