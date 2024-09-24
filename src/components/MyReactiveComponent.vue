<script setup>
import { reactive } from 'vue'

let initialState = reactive({ val: {count: 0}, user: ['HuXn', 'Jordan']})
</script>

<template>
   <h1>Current Count: {{ initialState.val.count }}</h1>
   <h2>User: {{ initialState.user }}</h2>

   <button @click="initialState.val.count+=10">Add 10</button>
   <button>Change User</button>
   <button>Add one more</button>
</template>