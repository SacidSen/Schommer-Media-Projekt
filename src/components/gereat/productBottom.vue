<template>
    <div class="shrink-0 mr-6" v-for="item in products.slice(5, 10)">
        <p class="">{{ item.Produkt }}</p>
        <p class="text-[#AFD96F]">{{ item.Preis }}€</p>
        <img class="lg:w-[200px] lg:border-r" :src="getImage(item.Dateiname)" :alt="item.Produkt">
    </div>
</template>

<script setup>
import { products, getImage } from '@/composables/getProduct';
</script>