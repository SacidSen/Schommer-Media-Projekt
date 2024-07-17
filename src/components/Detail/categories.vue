<template>
    <div>
        <div class="flex items-center justify-between border py-1 px-3 text-xs">
            <input class="placeholder:text-xs w-full outline-none" type="search" placeholder="Suche..." v-model="categoryFilter.searchVal.value">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>

        <p class="my-3 text-[#AFD96F] font-semibold text-sm">Kategorien</p>
        <div v-for="category in categories" :key="category" class="flex items-center pb-2 text-gray-800">
            <input type="checkbox" class="mr-2" :value="category" v-model="categoryFilter.selectedCategories.value">
            <p class="text-xs">{{ category }}</p>
        </div>
    </div>
</template>

<script setup>
import { useFilter } from '@/composables/filter';

const categoryFilter = useFilter()

const categories = ['Handys', 'Laptops', 'Monitore', 'Sonstiges', 'Samsung', 'ZTE', 'Huawei', 'Apple', 'Acer', 'Sale'];
</script>
