import { ref } from 'vue'

const products = ref([])

function getProducts() {
    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => products.value = data)
        .catch(err => console.log(err.message))
}

function getImage(file_name) {
    return new URL(`/src/assets/${file_name}`, import.meta.url)
};

export { products, getProducts, getImage }