<script setup>
import { ref } from 'vue'
let peoples = ref(['wilson', 'john', 'damaris'])

const books = ([
    {
        index: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publicationYear: 1960
    },
    {
        index: 2,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        publicationYear: 1949
    },
    {
        index: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        publicationYear: 1925
    },
    {
        index: 4,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        publicationYear: 1997
    },
    {
        index: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Literary Fiction",
        publicationYear: 1951
    }
]);


</script>

<template>
 <ul v-for="({id, title, author, genre, publicationYear}, i) in books" :key="i">
    <li>Id: {{ id }}</li>
    <li>Title: {{ title }}</li>
    <li>Author: {{ author }}</li>
    <li>Genre: {{ genre }}</li>
    <li>Publication year: {{ publicationYear }}</li>
 </ul>
</template>