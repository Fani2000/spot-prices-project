<template>
    <div>
      <h1>Workshops</h1>
      <ul>
        <li
          v-for="venue in availableVenues"
          :key="venue.id"
        >
          {{ venue.name }} - {{ venue.date }}
          <Button label="Book" v-if="venue.available" @click="bookWorkshop(venue.name, venue.date)">
          </Button>
          <span v-else>Sold Out</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import axios from 'axios';
  import { Button } from 'primevue'
  
  interface Venue {
    id: number;
    name: string;
    date: string;
    available: boolean;
  }
  
  const venues = ref<Venue[]>([
    { id: 1, name: 'Workshop A', date: '2024-12-01', available: true },
    { id: 2, name: 'Workshop B', date: '2024-12-02', available: false },
  ]);
  
  const availableVenues = computed(() => {
    return venues.value.filter((venue) => venue.available);
  });
  
  async function bookWorkshop(name: string, date: string) {
    // try {
    //   await axios.post('https://your-live-api.com/api/book', { venueName: name, date });
    //   alert('Workshop booked successfully!');
    //   const venue = venues.value.find((v) => v.name === name && v.date === date);
    //   if (venue) venue.available = false;
    // } catch (err) {
    //   alert('Booking failed!');
    // }
  }
  </script>
  