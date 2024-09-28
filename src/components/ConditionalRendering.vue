<script setup>
const isTrue = false
const isFalse = false
</script>

<template>
    <div>
        <p v-if="isTrue">This will show if isTrue is true</p>
        <p v-else-if="isFalse">This will show if isFalse is true</p>
        <p v-else>this will show if neither is true nor isFalse is true</p>
    </div>
</template>