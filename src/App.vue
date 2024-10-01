<script setup>
import {provide} from 'vue'
import PracticeComponent from './components/PracticeComponent.vue';

provide('friends',['alex','joram','Daidai'])

provide('games', {
  id:1,
  title: "Epic adventure game",
  genre: ['Action','Adventure', 'RPG'],
  platform: ['pc','playstation','xbox'],
  releasedate: '2023-05-16',
  developer: {
    name: 'owesome game studios',
    location: 'Tokyo',
    teamSize:63
  }
})

provide('moreGames',[
  {
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-adventure",
    platform: ["Nintendo Switch", "Wii U"],
    releaseDate: "March 3, 2017"
  },
  {
    title: "God of War",
    genre: "Action-adventure",
    platform: ["PlayStation 4", "PlayStation 5"],
    releaseDate: "April 20, 2018"
  },
  {
    title: "Among Us",
    genre: "Multiplayer, Social Deduction",
    platform: ["PC", "Nintendo Switch", "iOS", "Android", "PlayStation", "Xbox"],
    releaseDate: "June 15, 2018"
  },
  {
    title: "Cyberpunk 2077",
    genre: "Action role-playing",
    platform: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    releaseDate: "December 10, 2020"
  },
  {
    title: "Minecraft",
    genre: "Sandbox, Survival",
    platform: ["PC", "Xbox", "PlayStation", "Nintendo Switch", "iOS", "Android"],
    releaseDate: "November 18, 2011"
  }
])

</script>

<template>

<PracticeComponent/>
 
</template>

<style scoped>
/* Add your styles here */
</style>
