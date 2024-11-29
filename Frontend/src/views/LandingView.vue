<template>
  <div class="container mx-auto h-screen py-10 px-14 bg-gray-100 flex flex-col gap-10">
    <div class="text-center text-gray-800">
      <TheIntroduction />
    </div>

    <div class="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <SpotPricesTable :data="spotPrices" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import SpotPricesTable from '@/components/SpotPricesTable.vue';
import {storeToRefs} from "pinia";
import {useSpotPriceStore} from "@/stores/spotPrices.store";
import TheIntroduction from "@/components/TheIntroduction.vue";

const {initializeSpotPrices} = useSpotPriceStore()
const {spotPrices} = storeToRefs(useSpotPriceStore())

onMounted(async () => {
  
  if(spotPrices.value.length > 0) return;
  
  await initializeSpotPrices(); 
  
});
</script>
  