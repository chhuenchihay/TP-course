<script>
import Category from "./components/Category.vue";
import Promotions from "./components/Promotions.vue";
import { useProductStore } from "./stores/ProductStore";

export default {
  name: "App",
  components: {
    Category,
    Promotions,
  },
  data() {
    return {
      currentGroupName: 'Group A',
      groups: [],
      products: [],
      categories: [],
      promotions: [],
    };
  },
  methods: {
    async getAllData() {
      try {
        const productStore = useProductStore();

        await productStore.getGroups();
        await productStore.getProducts();
        await productStore.getCategories();
        await productStore.getPromotions();

        this.groups = productStore.groups;
        this.products = productStore.products;
        this.categories = productStore.categories;
        this.promotions = productStore.promotions;

        console.log("Groups:", this.groups);
        console.log("Products:", this.products);
        console.log("Categories:", this.categories);
        console.log("Promotions:", this.promotions);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    },
  },
  mounted() {
    this.getAllData();
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="wrapperUp">
        <Category
          v-for="items in Category"
          :key="items"
          :color="items.color"
          :name="items.name"
          :image="items.image"
          :amount="items.amount"
        ></Category>
      </div>

      <div class="wrapperDown">
        <Promotions
          v-for="Promotion in Promotions"
          :key="Promotion"
          :color="Promotion.color"
          :buttonColor="Promotion.buttonColor"
          :image="Promotion.image"
          :description="Promotion.description"
        ></Promotions>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style>
#app {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.wrapperUp {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}

.wrapperDown {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}
</style>
