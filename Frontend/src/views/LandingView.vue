<template>
    <div>
        <SpotPricesTable :data="spots" />
        <nav>
            <router-link to="/contact">Contact Us</router-link>
            <router-link to="/venues">Workshops</router-link>
        </nav>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SpotPricesTable from '@/components/SpotPricesTable.vue';
import { type Spot } from '@/models/SpotModels'

const spots = ref<Spot[]>([]);

onMounted(async () => {
    const { data } = await axios.get<any>('https://api.sharenet.co.za/api/v1/px2/spots');
    console.log('Data: ', data.spots)
    spots.value = data.spots?.slice(0, 5);
});
</script>
  