<template>
    <table class="table-auto w-full">
        <thead>
            <tr>
                <th @click="sort('fullName')">FullName</th>
                <th @click="sort('categoryName')">FullName</th>
                <th @click="sort('categoryId')">Price</th>
                <th @click="sort('price')">Price</th>
                <th @click="sort('pmove')">Price</th>
                <th @click="sort('move')">Price</th>
                <th @click="sort('ticketId')">Price</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in sortedData" :key="i">
                <td>{{ item.fullName }}</td>
                <td>{{ item.categoryName }}</td>
                <td>{{ item.categoryId }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.pmove }}</td>
                <td>{{ item.move }}</td>
                <td>{{ item.ticketId }}</td>
                <td>{{ item.datetime }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import { type Spot } from '@/models/SpotModels'

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