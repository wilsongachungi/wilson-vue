<script setup>
import { ref } from 'vue'
let peoples = ref(['wilson', 'john', 'damaris'])

const complexGamesObject = ref(
    {
        "game1": {
            "title": "The Lost Kingdom",
            "genre": "Action-Adventure",
            "platform": "PC, PS5, Xbox Series X",
            "releaseDate": "2023-10-15"
        },
        "game2": {
            "title": "Galactic Wars",
            "genre": "Sci-Fi Shooter",
            "platform": "PC, Xbox Series X, PS5",
            "releaseDate": "2024-03-22"
        },
        "game3": {
            "title": "Mystic Realms",
            "genre": "RPG",
            "platform": "Nintendo Switch, PC",
            "releaseDate": "2023-07-11"
        },
        "game4": {
            "title": "Speed Legends",
            "genre": "Racing",
            "platform": "PS5, Xbox Series X",
            "releaseDate": "2024-01-05"
        },
        "game5": {
            "title": "Survivor's Quest",
            "genre": "Survival Horror",
            "platform": "PC, PS5, Xbox Series X",
            "releaseDate": "2023-12-10"
        }
    }


)


</script>

<template>
    <ul v-for="({title, genre, platform, releaseDate}, index) in complexGamesObject" :key="index">
   <li>{{ title }}</li>
   <li>{{ genre }}</li>
   <li>{{ platform }}</li>
   <li>{{ publicationYear }}</li>
   <li>{{ releaseDate }}</li>
    </ul>
</template>