<script setup>
const props = defineProps(['fullName', 'age'])
</script>

<template>
   <p>{{ props.fullName }}</p>
   <p>{{ props.age }}</p>
</template>