<script setup>
import './index.css';
import { ref } from 'vue';

import FormComponent from './components/FormComponent.vue';

const formHandler = (username, email, password) => {
  console.log('username', username);
  console.log('email', email);
  console.log('password', password);
}

</script>

<template>


 <FormComponent  @userInfo="formHandler"/>

</template>

<style scoped>
/* Add your styles here */
</style>
