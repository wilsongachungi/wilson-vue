<script setup>
import { ref } from 'vue'

const formData = ref({ username:'', email:'', password:'' })

</script>

<template>
 <form @submit.prevent action="">
    <input type="text" placeholder="enter your name" v-model="formData.username"/>
    <input type="email" placeholder="enter your email" v-model="formData.email"/>
    <input type="password" placeholder="enter your password" v-model="formData.password"/>
    <button  type="submit">Submit</button>
 </form>
 <h1>{{ formData.username }}</h1>
 <h1>{{ formData.email }}</h1>
 <h1>{{ formData.password }}</h1>
</template>