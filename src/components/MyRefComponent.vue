<script setup>
import { ref } from 'vue'

let userInfo = ref({name: 'Wilson', age: '26', location: ['CIARAINI','NYERI'], isMarried: false});
</script>

<template>
    <div class="mt-5 ml-5">
        <h1>Name: {{ userInfo.name }}</h1>
        <h1>Age: {{ userInfo.age }}</h1>
        <h1>location: {{ userInfo.location }}</h1>
        <h1>IsMarried: {{ userInfo.isMarried }}</h1>

        <div>
            <button @click="userInfo.name = 'Dadaa'">Update User Name</button> <br>
            <button @click="userInfo.age += 10">Update User age</button><br>
            <button @click="userInfo.isMarried = 'no'">Is married</button>
        </div>

    </div>

 
</template>