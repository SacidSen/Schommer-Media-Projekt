<script setup>
import { ref } from 'vue';
import { useFilter } from '@/composables/filter';
const { selectedPrices } = useFilter();

const IsTrue = ref(false);

function selectItemsByPriceRange(range) {
    if (selectedPrices.value.includes(range)) {
        selectedPrices.value = selectedPrices.value.filter(r => r !== range);
    } else {
        selectedPrices.value.push(range);
    }
}

</script>

<template>
    <div>
        <p class="text-[#AFD96F] font-semibold mt-3">Preis</p>
        <a @click="IsTrue = !IsTrue" href="#" class="flex justify-between items-center border px-2">
            <p class="text-xs p-1">Preisspanne wählen...</p>
            <svg class="ease-in duration-300" :style=" IsTrue ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)' " xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
        <Transition name="fade">
            <div v-if="IsTrue" class="w-full flex flex-col">
                <button class="border-b w-full text-xs p-2" href="#" @click="selectItemsByPriceRange('0-50')">0€ - 50€</button>
                <button class="border-b w-full text-xs p-2" href="#" @click="selectItemsByPriceRange('51-100')">50€ - 100€</button>
                <button class="border-b w-full text-xs p-2" href="#" @click="selectItemsByPriceRange('101-150')">100€ - 150€</button>
                <button class="border-b w-full text-xs p-2" href="#" @click="selectItemsByPriceRange('151-200')">150€ - 200€</button>
                <button class="border-b w-full text-xs p-2" href="#" @click="selectItemsByPriceRange('200+')">200€ und mehr</button>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.rotate-enter-active,
.rotate-leave-active {
    transition: all 1s ease;
}

.rotate-enter-from,
.rotate-leave-to {
    transform: rotate(180deg);
}
</style>