<script setup>
import { ref } from 'vue';

const isActive = ref(false)

</script>

<template>
  
    <div v-if="isActive">
        <h1>My Blog Post</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error obcaecati rerum fugit quidem iusto vero repudiandae. Id, assumenda! Porro.
    </div>
    <button @click="isActive = !isActive">Toggle button</button>
</template>