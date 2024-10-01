<script setup>
import { ref } from 'vue'
const username = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
    <form @submit.prevent="$emit('userInfo', username, email, password)">
        <input type="text" placeholder="name" v-model="username">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button type="submit">Submit</button>
    </form>
</template>