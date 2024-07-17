<script setup>
import { onMounted } from "vue";
import { getProducts } from "./composables/getProduct";


onMounted(getProducts);
</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  font-family: "Montserrat", sans-serif;
}
</style>
