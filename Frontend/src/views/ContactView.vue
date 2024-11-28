<template>
    <div>
      <h1>Contact Us</h1>
      <p>Sharenet Address: 123 Finance Ave, Johannesburg, SA</p>
      <p>Phone: +27 11 123 4567</p>
      <!-- <google-maps :center="{ lat: -26.2041, lng: 28.0473 }" :zoom="15" /> -->
      <div>Map</div>
      <Button label="Home">
        <router-link to="/">Home</router-link>
      </Button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineComponent } from 'vue';
  import {Button} from 'primevue'
  // import { GoogleMap } from '@vue/google-maps';
  </script>
  