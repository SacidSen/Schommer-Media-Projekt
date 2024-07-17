<template>
    <div class="lg:flex w-full mb-10">
            <!-- top-left-section -->
            <div>
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    <RouterLink to="/" href="#">zurück</RouterLink>
                </div>
                <img class="w-[350px]" :src="getImage(props.data?.Dateiname)" :alt="props.data?.Produkt">
            </div>

            <!-- top right section -->
            <div>
                <h1 class="font-bold text-[#505050] text-xl mb-8">
                    {{ props.data?.Produkt }}
                </h1>
                <div class="mb-4">
                    <p class="text-[#AFD96F] font-semibold">Preis</p>
                    <p class="text-[#505050]">{{ props.data?.Preis }}</p>
                </div>
                <div class="mb-4">
                    <p class="text-[#AFD96F] font-semibold">Versand</p>
                    <p class="text-[#505050]">Lieferung bis zu {{ props.data?.Lieferzeit }} Tage</p>
                </div>
                <div class="mb-4">
                    <p class="text-[#AFD96F] font-semibold">Lagerbestand</p>
                    <p :class="{ 'hidden': isAvabile }" class="text-[#505050]">Nur noch {{ props.data?.Lagerbestand }} Stück auf Lager</p>
                    <p v-if="isAvabile" class="text-red-500">Aktuell nicht auf Lager!</p>
                </div>
                <button :class="{ 'opacity-35': isAvabile }" class="border border-[#AFD96F] px-16 text-xs py-2 rounded-full hover:bg-lime-100">Kaufen</button>
            </div>
        </div>
</template>

<script setup>
import { ref, defineProps, onUpdated  } from 'vue';
import { getImage } from '@/composables/getProduct';

const props = defineProps({
    data: Object
});

const isAvabile = ref(false);

onUpdated(() => {
  if(props.data?.Lagerbestand < 1 ) 
    isAvabile.value = true;
})
</script>

<style scoped>

</style>