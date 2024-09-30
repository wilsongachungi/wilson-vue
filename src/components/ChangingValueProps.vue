<script setup>
const props = defineProps(['myFavoriteNumber: Number'])
</script>

<template>
    <h1>{{props.myFavoriteNumber}}</h1>
</template>