<template>
  <div class="container p-4">
    <h1 class="text-center text-3xl font-bold mb-8">Workshop Venues</h1>

    <!-- PrimeVue DataTable -->
    <DataTable :value="venues" class="shadow-md rounded-lg">
      <Column field="venue_name" header="Venue Name"></Column>
      <Column field="date" header="Date"></Column>
      <Column header="Status">
        <template #body="slotProps">
          <span>{{ slotProps.data.available ? 'Available' : 'Sold Out' }}</span>
        </template>
      </Column>
      <Column header="Action">
        <template #body="slotProps">
          <Button 
            :disabled="!slotProps.data.available"
            label="Book" 
            @click="bookWorkshop(slotProps.data.id)"
          ></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

interface Venue {
  id: number;
  venue_name: string;
  date: string;
  available: boolean;
}

const venues = ref<Venue[]>([]);

async function fetchVenues() {
  try {
    const response = await axios.get('http://localhost:5000/api/book');
    console.log(response.data)
    venues.value = response.data;
  } catch (error) {
    console.error('Error fetching venues:', error);
    alert('Failed to load venues');
  }
}

async function bookWorkshop(id: number) {
  console.log("ID: ", id)
  try {
    await axios.post(`http://localhost:5000/api/book/${id}`);
    alert('Workshop booked successfully!');
    const venue = venues.value.find((v) => v.id === id);
    if (venue) venue.available = false; // Update availability locally
  } catch (error) {
    console.error('Error booking workshop:', error);
    alert('Booking failed!');
  }
}

onMounted(fetchVenues);
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 0.5rem;
}
</style>