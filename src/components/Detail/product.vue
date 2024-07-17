<template>
    <RouterLink :class="{ 'mt-8 flex items-center justify-center': isAvabile }"
        class="sm:border-b md:border-b lg:border-none relative min-w-[330px]" id="product"
        :to="`gereateubersicht/${data.id}`">
        <p :class="{ 'hidden': isAvabile }" class="ml-4 text-[#505050]">
            {{ data.Produkt }}
        </p>
        <p :class="{ 'hidden': isAvabile }" class="mb-1 ml-4 text-[#AFD96F] font-semibold text-sm">
            {{ data.Preis }}
        </p>
        <img :class="{ 'opacity-35': isAvabile }" id="img" class="w-[300px] lg:border-l" :src="getImage(data.Dateiname)" :alt="data.Produkt">
        <div v-if="isAvabile" class="absolute text-red-500 text-sm font-semibold">
            <p>Nicht mehr</p>
            <p>Auf Lager!</p>
        </div>
    </RouterLink>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getImage } from "@/composables/getProduct";

const props = defineProps({
    data: Object
});

const isAvabile = ref(false);
    
onMounted(() => {
    if (props.data.Lagerbestand < 1)
        return isAvabile.value = true;
});
</script>

<style scoped>
@media (max-width: 1000px) {

    #product {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>