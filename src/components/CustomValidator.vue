<script setup>
defineProps({
    name:{
        type: String,
        validator: (propValue) => {
            return ['wilson', 'john', 'kelvin'].includes(propValue)
        }
    },

    age:{
        type: Number,
        validator: (propValue)  => (propValue >= 18 && propValue <= 30 ? true : false)
    },

    password: {
        type: String,
        validator: (propsValue) => propsValue.length >= 8 
    }
})
</script>

<template>
    <h1>{{name}}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ password }}</h1>
</template>