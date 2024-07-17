<template>
    <!-- container -->
    <div class="w-full flex items-center flex-col">
        <!-- content -->
        <div id="responsive" class="w-2/3 lg:flex h-full">
            <!-- search section -->
            <div id="shadow" class="pr-6 pt-10 bg-white">
                <categories></categories>
                <dropdown></dropdown>
            </div>
            <!-- products -->
            <div id="width" class="w-5/6 pt-10 pl-10 grid grid-rows-2 lg:grid-flow-col-dense transition-all">
                <!-- product -->
                <product :data="productData" v-for="productData in paginateProducts(categoryFilter.filterByCategory(products), pages_size, currentPage)" :key="productData.id"></product>
            </div>
        </div>

        <!-- pagination -->
        <div class="select-none mt-5">
            <button @click="prevPage" class="border p-1.5 py-1 text-xs text-gray-700 hover:bg-green-300 disabled:opacity-50" :disabled="currentPage === 1"><</button>
            <button v-for="page in pages_count" @click="currentPage = page" class="border p-1.5 py-1 text-xs text-gray-700 hover:bg-green-300" :class="currentPage === page ? 'bg-green-700' : ''">{{ page }}</button>
            <button @click="nextPage" class="border p-1.5 py-1 text-xs text-gray-700 hover:bg-green-300 disabled:opacity-50" :disabled="currentPage === pages_count">></button>
        </div>
    </div>
</template>

<script setup>
import { useFilter } from "@/composables/filter"
import product from "../components/Detail/product.vue";
import dropdown from "../components/Detail/dropdown.vue";
import categories from "../components/Detail/categories.vue";
import { products } from "@/composables/getProduct";
import { ref } from "vue";
import { computed } from "vue";

const categoryFilter = useFilter()
const currentPage = ref(1)
const pages_size = ref(6)
const pages_count = computed(() => Math.ceil(categoryFilter.filterByCategory(products.value).length / pages_size.value))

// paginate page per 6
function paginateProducts(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

function nextPage() {
    if (currentPage.value < pages_count.value)
        currentPage.value = currentPage.value + 1
}

function prevPage() {
    if (currentPage.value > 1)
        currentPage.value = currentPage.value - 1
}

</script>

<style>
#shadow {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    clip-path: inset(0px -4px 0px 0px);
    min-width: 17%;
    z-index: 10;
}

@media (max-width: 1000px) {
    #shadow {
        box-shadow: none;
    }
}

#width {
    width: 83%;
}
</style>