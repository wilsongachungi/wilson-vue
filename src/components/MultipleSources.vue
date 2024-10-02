<script setup>
import { ref, watch } from 'vue'

const username = ref('Badi')
const counter = ref(0)

watch([username, counter], (newValue, oldValue) => {
    console.log(newValue, oldValue)
})
</script>

<template>
    <h1>{{ username }}</h1>
    <h1>{{ counter }}</h1>

    <button @click="username = 'wilson'">Change Name</button>
    <button @click="counter++">Increament counter </button>
</template>