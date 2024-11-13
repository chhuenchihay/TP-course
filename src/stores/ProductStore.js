import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
        groups: [],
        promotions: [],
        categories: [],
        products: [],
    }),
    getters: {
        getCategoriesByGroup: (state) => {
            return (groupName) => state.categories.find((category) => category.group === groupName)
        },
        getProductsByGroup: (state) => {
            return (groupName) => state.products.find((product) => product.group === groupName)
        },
        getProductsByCategory: (state) => {
            return (categoryID) => state.products.find((product) => product.category === categoryID)
        },
        getPopularProducts: (state) => {
            return () => state.products.find((product) => product.countSold > 10 )
        },
    },
    
    actions: {
        async getGroups() {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/groups"
            );
            this.groups = response.data;
        } catch (error) {
            console.error("Error fetching groups:", error);
        }
        },

        async getProducts() {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/products"
            );
            this.products = response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        },

        async getCategories() {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/categories"
            );
            this.categories = response.data;
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
        },

        async getPromotions() {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/promotions"
            );
            this.promotions = response.data;
        } catch (error) {
            console.error("Error fetching promotions:", error);
        }
        },
    },
});
