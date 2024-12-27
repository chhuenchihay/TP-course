import { defineStore } from "pinia";
import axios from "axios";
// import { ref } from "vue";

export const useProductStore = defineStore("product", {
    state: () => ({
        // groups: [], // Stores group data
        promotions: [], // Stores promotion data
        categories: [], // Stores category data
        products: [], // Stores products data
    }),

    getters: {
        // Filter categories by group name
        getCategoriesByGroup: (state) => (groupName) => {
            return state.categories.filter((category) => category.groupName === groupName);
        }
    },    

        actions: {
            // Function to fetch categories
            async fetchCategories() {
                try {
                    const response = await axios.get("http://localhost:3000/api/categories"); // Replace <port> with your server port
                    this.categories = response.data; // Store the fetched categories
                    return response.data; // Return the data for further use
                } catch (error) {
                    console.error("Error fetching categories:", error);
                    throw error;
                }
            },

            // Function to fetch promotions
            async fetchPromotions() {
                try {
                    const response = await axios.get("http://localhost:3000/api/promotions");
                    this.promotions = response.data; // Store the fetched promotions
                    return response.data; // Return the data for further use
                } catch (error) {
                    console.error("Error fetching promotions:", error);
                    throw error;
                }
            },

            async fetchProducts() {
                try {
                    const response = await axios.get("http://localhost:3000/api/products");
                    this.products = response.data; // Store the fetched products
                    return response.data; // Return the data for further use
                } catch (error) {
                    console.error("Error fetching products:", error);
                    throw error;
                }
            },

            // Function to create a promotion
            // async createPromotion(promotionData, imageFile) {
            //     try {
            //         const formData = new FormData();

            //         // Append fields from promotionData
            //         Object.keys(promotionData).forEach((key) => {
            //             formData.append(key, promotionData[key]);
            //         });

            //         // Append the image file
            //         formData.append("image", imageFile);

            //         const response = await axios.post("http://localhost:3000/api/promotions", formData, {
            //             headers: {
            //                 "Content-Type": "multipart/form-data",
            //             },
            //         });

            //         // Optionally, update the local promotions array
            //         this.promotions.push(response.data);
            //         return response.data;
            //     } catch (error) {
            //         console.error("Error creating promotion:", error);
            //         throw error;
            //     }
            // },
        },
    });
