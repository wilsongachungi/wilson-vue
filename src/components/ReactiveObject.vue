<script setup>
import {reactive, watch} from 'vue'
const state = reactive({username: 'alex'})



watch(() =>state.username, (newValue, oldValue) => {
    console.log('new value', newValue)
    console.log('old value', oldValue)
})
</script>

<template>
    <h1>{{state.username}}</h1>
    <button @click="state.username = 'paul'">Change Name</button>
</template>