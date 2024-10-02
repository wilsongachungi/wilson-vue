<script setup>
import { ref, watch } from 'vue'
const message = ref('hello, vue!')
const inputText = ref('apple')

//wach for changes in input text and upodate message accordingly
watch(inputText,(newValue, oldValue) => {
    //you can perform some logics here when input text changes
    console.log(newValue)
    console.log(oldValue)
    message.value = `You Typed: ${newValue}`
})
</script>

<template>
   <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="inputText" placeholder="type something...">
   </div>
</template>