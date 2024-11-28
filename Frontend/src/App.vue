<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menubar from 'primevue/menubar';
import { ref } from "vue";


const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    url: "/" 
  },
  {
    label: 'Venues',
    icon: 'pi pi-star',
    url: "/venues"
  },
]);
</script>

<template>
  <div>
    <Menubar :model="items" class="" /> 
    <RouterView />
  </div>
</template>

<style scoped>
</style>
