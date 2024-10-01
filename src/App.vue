<script setup>

import SchoolComponent from './components/SchoolComponent.vue';
import { provide } from 'vue'

provide('studentName', 'alex')
provide('studentAge', '26')
provide('studentLocation', ['ciaraini','nyeri'])

</script>

<template>

  <SchoolComponent />
 
</template>

<style scoped>
/* Add your styles here */
</style>
