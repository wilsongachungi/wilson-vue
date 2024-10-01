<script setup>
import { inject } from 'vue'

const friendList = inject('friends')
const games = inject('games')
const moreGames = inject('moreGames')
</script>

<template>
    <h1>Injecting Array</h1>
    <ul v-for="(friend, index) in friendList" :key="index">
        <li>{{ friend }}</li>
    </ul>

    <hr>

    <h1>Injecting Object</h1>
    <ul v-for="(game, i ) in games" :key="i">
        <li>{{ game }}</li>
    </ul>

    <hr>
    <h1>Array of objects</h1>
    <ul v-for="(moreGame, i) in moreGames" :key="i">
        <li>
            {{ moreGame }}
        </li>
    </ul>

    <hr>
    <h1>Desructuring</h1>
    <ul v-for="({title,genre,platform,releaseDate}, i) in moreGames" :key="i">
        <li>Title:{{ title }}</li>
        <li>Platform:{{ platform }}</li>
        <li>Genre:{{ genre }}</li>
        <li>Releasedate:{{ releaseDate }}</li>
    </ul>

</template>