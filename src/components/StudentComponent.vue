<script setup>
defineProps(['studentName', 'studentAge', 'studentLocation'])
</script>

<template>
    <h1>{{studentName}}</h1>
    <h1>{{studentAge}}</h1>
    <h1>{{studentLocation}}</h1>
</template>