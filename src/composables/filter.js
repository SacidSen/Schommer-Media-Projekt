import { ref } from "vue";
import Fuse from 'fuse.js';

const searchVal = ref('');
const selectedCategories = ref([])
const selectedPrices = ref([]);

function useFilter() {
    function filterByCategory(data) {
        if (!data.length) return [];

        const filteredByCategory = data.filter(item => 
            selectedCategories.value.length === 0 || selectedCategories.value.includes(item.Kategorie)
        );

        const filteredByPrice = filteredByCategory.filter(item => {
            if (selectedPrices.value.length === 0) return true;

            const price = item.Preis;
            return selectedPrices.value.some(range => {
                switch(range) {
                    case '0-50':
                        return price >= 0 && price <= 50;
                    case '51-100':
                        return price > 50 && price <= 100;
                    case '101-150':
                        return price > 100 && price <= 150;
                    case '151-200':
                        return price > 150 && price <= 200;
                    case '200+':
                        return price > 200;
                    default:
                        return false;
                }
            });
        });

        const fuse = new Fuse(filteredByPrice, {
            keys: ['Produkt'],
            threshold: 0.3
        });

        const searchResults = searchVal.value ? fuse.search(searchVal.value).map(result => result.item) : filteredByPrice;

        return searchResults;
    }

    return { filterByCategory, selectedCategories, searchVal, selectedPrices };
}

export { useFilter };