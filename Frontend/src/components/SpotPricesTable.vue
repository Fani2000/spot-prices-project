<template>
  <DataTable :value="data" tableStyle="min-width: 50rem" stripedRows paginator :rows="10" :rowsPerPageOptions="[10, 20, 50]" size="small">
    <Column field="code" header="Code"></Column>
    <Column field="fullName" header="Full Name"></Column>
    <Column field="categoryId" header="Category"></Column>
    <Column field="price" header="Price"></Column>
    <Column field="move" header="Move"></Column>
    <Column field="tickerId" header="Ticket Id"></Column>
    <Column field="datetime" header="Datetime"></Column>
  </DataTable>
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import { type Spot } from '@/models/SpotModels'
import Column from "primevue/column";
import DataTable from "primevue/datatable";

const props = defineProps<{ data: Spot[] }>();
const { data } = toRefs(props)

const sortKey = ref<string>('');
const sortAsc = ref<boolean>(true);

const sortedData = computed(() => {
    return [...data.value].sort((a, b) => {
        const res = a[sortKey.value as keyof Spot] > b[sortKey.value as keyof Spot] ? 1 : -1;
        return sortAsc.value ? res : -res;
    });
});

function sort(key: string) {
    sortKey.value = key;
    sortAsc.value = !sortAsc.value;
}
</script>