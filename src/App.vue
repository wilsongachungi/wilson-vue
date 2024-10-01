<script setup>

import SchoolComponent from './components/SchoolComponent.vue';

 const studentName = 'alex'
 const studentAge = 20
 const studentLocation = ['ciaraini','Nyeri']
</script>

<template>

  <SchoolComponent :studentName="studentName" :studentAge="studentAge" :studentLocation="studentLocation" />
 
</template>

<style scoped>
/* Add your styles here */
</style>
