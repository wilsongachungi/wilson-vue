<script setup>
defineProps({
    friends: Array,
    userInfo:Object,
})
</script>

<template>
    <h1>{{ friends }}</h1>
    <h1>{{ userInfo }}</h1>
</template>