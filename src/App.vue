<script>
import Category from "./components/Category.vue";
import Promotions from "./components/Promotions.vue";
import Menu from "./components/Menu.vue";
import Product from "./components/Product.vue";
import { useProductStore } from "./stores/ProductStore";
import { onMounted } from "vue";

export default {
  name: "App",
  components: {
    Category,
    Promotions,
    Menu,
    Product
  },
  setup() {
      const productStore = useProductStore();
      onMounted(async () => {
        try {
          // await productStore.fetchGroups();
          // console.log("Fetching Groups:", productStore.groups);

          await productStore.fetchCategories();
          console.log("Categories:", productStore.categories);
  
          await productStore.fetchPromotions();
          console.log("Promotions:", productStore.promotions);

          await productStore.fetchProducts();
          console.log("products:", productStore.products);
  
          // console.log("Fetching Products...");
          // await productStore.fetchProducts();
          // console.log("Products:", productStore.products);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      });
      return {
        productStore,
      };
    },
  // setup() {
  //   const productStore = useProductStore(); // Access the Pinia store instance

  //   const logCategories = async () => {
  //     try {
  //       const categories = await productStore.fetchCategories(); // Call the fetchCategories action
  //       console.log("Fetched Categories:", categories);
  //     } catch (error) {
  //       console.error("Error logging categories:", error);
  //     }
  //   };

  //   const logPromotions = async () => {
  //     try {
  //       const promotions = await productStore.fetchPromotions(); // Call the fetchPromotions action
  //       console.log("Fetched Promotions:", promotions);
  //     } catch (error) {
  //       console.error("Error logging promotions:", error);
  //     }
  //   };

    // onMounted(() => {
    //   logCategories();
    //   logPromotions();
    // });

  //   return {
  //     productStore,
  //     logCategories,
  //     logPromotions,
  //   };
  // },
};
</script>


<template>
  <div id="app">
    <div class="container">
      <Menu name="Featured Categories"></Menu>
      <div class="wrapperUp">
        <Category
          v-for="items in productStore.categories"
          :key="items.id"
          :color="items.color"
          :name="items.name"
          :image="items.image"
          :productCount="items.productCount"
        ></Category>
      </div>

      <div class="wrapperDown">
        <Promotions
          v-for="Promotion in productStore.promotions"
          :key="Promotion.id"
          :color="Promotion.color"
          :buttonColor="Promotion.buttonColor"
          :image="Promotion.image"
          :title="Promotion.title"
        ></Promotions>
      </div>

      <Menu name="Popular Products"></Menu>
      
      <div class="proContainer">
        <Product
        v-for="productItem in productStore.products"
          :key="productItem.id"
          :name="productItem.name"
          :rating="productItem.rating"
          :size="productItem.size"
          :image="productItem.image"
          :price="productItem.price"
          :promotionAsPercentage="productItem.promotionAsPercentage"
          :instock="productItem.instock"
          :countSold="productItem.countSold"
        ></Product>
      </div>

    </div>
  </div>
</template>


<style scoped>
#app {
  background-color: rgb(255, 255, 255);
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 4rem;
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

.proContainer{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.75rem;
}

</style>
