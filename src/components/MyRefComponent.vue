<script setup>
import { ref } from 'vue'

// let count = ref(0)

let userName = ref('')
</script>

<template>
    <!-- <h1>Count: {{ count }}</h1>
    <button @click="count++">+</button>
    <button @click="count--">-</button> -->
    <h1>Username: {{ userName }}</h1>
    <button @click="userName = 'jordan'">Add user</button>
</template>