<template>
  <DataTable :value="data" tableStyle="min-width: 50rem" stripedRows paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" size="large">
    <Column field="fullName" header="Full Name"></Column>
    <Column field="price" header="Price"></Column>
    <Column field="move" header="Move"></Column>
    <Column field="pmove" header="Percentage Move"></Column>
    <Column field="datetime" header="Time"></Column>
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