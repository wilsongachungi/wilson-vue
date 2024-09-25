<script setup>
import { reactive, ref } from 'vue'

let friends = reactive([ref('Jordan'), ref('Alex'),ref('wilon')])
</script>

<template>
  
    <h1>1.{{ friends[0] }}</h1>
    <h1>2.{{ friends[1] }}</h1>
    <h1>3.{{ friends[2] }}</h1>

    <button @click="friends[0] = '🤝'">Hand Shake</button> <br>
    <button @click="friends[1] = '🤝'">Hand Shake</button> <br>
    <button @click="friends[2] = '🤝'">Hand Shake</button>

 
</template>