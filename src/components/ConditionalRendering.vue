<script setup>
const isTrue = true
const isFalse = false
</script>

<template>
    <div>
        <p v-if="false">This will show if isTrue is true</p>
    </div>
</template>