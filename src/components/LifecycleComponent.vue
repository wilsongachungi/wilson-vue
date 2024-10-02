<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const message = ref('hello, vue!')

// lifecycle hooks
onBeforeMount(() => {
    console.log('before mount')
})

onMounted(() => {
    console.log('mounted')
})

onBeforeUpdate(() => {
    console.log('before updated')
})

onBeforeUnmount(() => {
    console.log('component is about to be unmounted')
})

const updateMessage = () => {
   message.value = 'updated message' 
}

onUnmounted(() => {
    console.log('component has been unmounted')
})

onUpdated(() => {
    console.log('component has been updated')
})

</script>

<template>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update message</button>
</template>