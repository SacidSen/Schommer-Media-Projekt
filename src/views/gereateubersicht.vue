<template>
    <div class="w-full flex justify-center">
        <div class="w-2/3 h-full flex mt-20 items-center flex-col">
            <productTop :data="selectedProduct" />
            <div class="flex flex-col w-full">
                <p class="font-bold text-gray-700 text-xl mb-6">Ähnliche Suchvorschläge</p>
                <!-- products -->
                <div class="lg:flex justify-center">
                    <productBottom />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import productTop from '@/components/gereat/productTop.vue';
import productBottom from '@/components/gereat/productBottom.vue';
import { ref, onMounted } from 'vue';
import { products } from '@/composables/getProduct';
import { useRoute } from 'vue-router';

const route = useRoute();
const selectedProduct = ref(null);

onMounted(() => {
    const product = products.value.find((product) => product.id === route.params.id);
    selectedProduct.value = product;
});
</script>
