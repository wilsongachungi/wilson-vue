<script setup>
import { ref } from 'vue'
let isVisible = ref(false)
</script>

<template>
    <div>
       <p v-show="isVisible">This paragraph will be seen or hidden depending with the value of isVisible</p>
       <button @click="isVisible = !isVisible">Toggle visibility</button>
    </div>
</template>