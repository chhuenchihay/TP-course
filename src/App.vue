<script>
import { computed } from 'vue';
import Category from './components/Category.vue'
import Promotions from './components/Promotions.vue';
import axios from 'axios';

export default{
  name: "App",
  components: {
    Category, Promotions
  },

  data (){
    return {
      Category: [],
      Promotions: []
    };
  },

  methods: {
    getCategory() {
      axios.get('http://localhost:3000/api/categories')
        .then(response => {
          this.Category = response.data;
        })
    },
    getPromotion() {
      axios.get('http://localhost:3000/api/promotions')
        .then(response => {
          this.Promotions = response.data;
        })
    },
    
  },
  mounted() {
    this.getCategory();
    this.getPromotion();
  }
}
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
