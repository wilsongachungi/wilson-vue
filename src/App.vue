<script setup>
import { ref } from 'vue'
import LifecycleComponent from './components/LifecycleComponent.vue';
const showHide = ref(true)

</script>

<template>

<LifecycleComponent v-if="showHide"/>
<button @click="showHide = !showHide">Show / Hide</button>
 
</template>

<style scoped>
/* Add your styles here */
</style>
