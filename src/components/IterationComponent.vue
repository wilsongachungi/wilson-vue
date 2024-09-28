<script setup>
import { ref } from 'vue'
let peoples = ref(['wilson', 'john', 'damaris'])

const movies = ref([
    [
        "Inception",
        "The Shawshank Redemption",
        "The Dark Knight"
    ],
    [
        "Pulp Fiction",
        "The Godfather",
        "Forrest Gump"
    ],
    [
        "The Matrix",
        "Fight Club",
        "The Lord of the Rings: The Fellowship of the Ring"
    ]
])


</script>

<template>
<ul v-for="(movie, i) in movies" key="i">
    <li v-for="(m, index) in movie" key="index">{{ m }}</li>
</ul>
</template>