<script setup>
import './index.css';
import { ref } from 'vue';

// Defining reactive variables
const firstName = ref('Wilson')
const lastName = ref('WebDev')
const MyFavoriteNumber = ref(7)

// Importing your components
import StaticPropsComponent from './components/StaticPropsComponent.vue';
import DynamicPropsComponent from './components/DynamicPropsComponent.vue';
import ChangingValueProps from './components/ChangingValueProps.vue';
import PropsValidation from './components/PropsValidation.vue';
import ComplexProps from './components/ComplexProps.vue';
import CustomValidator from './components/CustomValidator.vue';
</script>

<template>
  <!-- Static and Dynamic Props Components -->
  <StaticPropsComponent name="Wilson" />
  <DynamicPropsComponent :firstName="firstName" :lastName="lastName" />

  <hr>

  <!-- Changing Value Props Component -->
  <ChangingValueProps :MyFavoriteNumber="MyFavoriteNumber" />
  <hr>
  <PropsValidation fullName="wilson" :age="25" />
  <hr>
  <ComplexProps :friends="['alex', 'john', 'daidai']" :userInfo="{name: 'alex', age:20, location: ['ciaraini','nyeri']}" />
  <hr>
  <CustomValidator name="wilson" :age="26" password="impossiblePassword"/>

</template>

<style scoped>
/* Add your styles here */
</style>
