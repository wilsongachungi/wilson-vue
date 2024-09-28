<script setup>
    import { ref } from 'vue'
    let peoples = ref(['wilson','john','damaris'])

</script>

<template>
    <p v-for="(person, index) in peoples" :key="index">{{ person }}</p>
</template>