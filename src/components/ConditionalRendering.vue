<script setup>
import { ref } from 'vue';

let isUserLoggedIn = ref(true);
let userName = 'wilson'
let showDetails = ref(isUserLoggedIn);

</script>

<template>
    <div>
      <h1 v-if="isUserLoggedIn"> welcome {{  userName }} </h1>
      <p v-else>please log in to see the content here.</p>
    </div>
    <div v-show="showDetails">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error obcaecati rerum fugit quidem iusto vero repudiandae. Id, assumenda! Porro.
    </div>
</template>