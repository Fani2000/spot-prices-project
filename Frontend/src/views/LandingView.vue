<template>
    <div class="container full-height px-8 mx-auto flex flex-col gap-7">
      <div>Introdution</div>
        <SpotPricesTable :data="spots" />
      <div>
        <Button>
          <router-link to="/contact">
            Contacts
          </router-link>
        </Button>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {Button} from 'primevue'
import SpotPricesTable from '@/components/SpotPricesTable.vue';
import { type Spot } from '@/models/SpotModels'

const spots = ref<Spot[]>([]);

onMounted(async () => {
    const { data } = await axios.get<any>('https://api.sharenet.co.za/api/v1/px2/spots');
    console.log('Data: ', data.spots)
    spots.value = data.spots.map((x:any) => ({
      "code": x.code,
      "fullName": x.fullName,
      "categoryName": x.categoryName,
      "categoryId": x.categoryId,
      "price": x.price,
      "move": x.move,
      "pmove": x.pmove,
      "tickerId": x.tickerId,
      "datetime": x.datetime
    }));
});
</script>
  