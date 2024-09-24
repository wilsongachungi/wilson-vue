<script setup>
import { reactive } from 'vue'

let initialState = reactive(0)
</script>

<template>
    <h1>Count: {{ initialState }}</h1>
    <button @click=" initialState ++ " ></button>
</template>