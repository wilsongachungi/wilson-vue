<script setup>
import { ref } from 'vue';

let password = ref(0)

</script>

<template>
  
    <p v-if="password.length > 8">Strong password</p>
    <p v-else-if="password.length < 8">Weak password</p>
    <p v-else>Please enter your password</p>
    
</template>