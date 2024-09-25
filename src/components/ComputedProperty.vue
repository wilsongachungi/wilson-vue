<script setup>
    import { ref, computed } from 'vue';

    const number = ref(5)

    const squaredNumber = computed(() => {
        return number.value * number.value
    })

</script>

<template>
    <h1>Original Number: {{ number }}</h1>
    <h1>Original Number: {{ squaredNumber }}</h1>
</template>

