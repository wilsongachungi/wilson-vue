<script setup>

import { reactive } from 'vue'

let initialState = reactive({ val: {count: 0}, user: ['HuXn', 'Jordan']})
let changeUser = () => {
    initialState.user[0] = 'michael'
    initialState.user[1] = 'Philip'
}
</script>

<template>
   <h1 class="mt-10">Current Count: {{ initialState.val.count }}</h1>
   <h2>User: {{ initialState.user }}</h2>

   <button @click="initialState.val.count += 10">Add 10</button>
   <button @click="changeUser">Change User</button>
   <button>Add one more</button>
</template>