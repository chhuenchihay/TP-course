<script>
import Category from './components/Category.vue'
import Promotions from './components/Promotions.vue';

export default{
  name: "App",
  components: {
    Category, Promotions
  }
}
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="wrapperUp">
        <Category color="#F2FCE4" name="Cake & Milk" image="images/burger.png" amount="14 Category"></Category>
        <Category color="#FFFCEB" name="Peach" image="images/persimmon.png" amount="17 Category"></Category>
        <Category color="#ECFFEC" name="Organic Kiwi" image="images/kiwi.png" amount="21 Category"></Category>
        <Category color="#FEEFEA" name="Red Apple" image="images/apple.png" amount="68 Category"></Category>
        <Category color="#FFF3EB" name="Snack" image="images/snack.png" amount="34 Category"></Category>
        <Category color="#FFF3FF" name="Black Plum" image="images/blackPlum.png" amount="25 Category"></Category>
        <Category color="#F2FCE4" name="Vegetables" image="images/cabbage.png" amount="65 Category"></Category>
        <Category color="#FFFCEB" name="Headphones" image="images/headphone.png" amount="33 Category"></Category>
        <Category color="#F2FCE4" name="Cake & Milk" image="images/macaron.png" amount="54 Category"></Category>
        <Category color="#FFF3FF" name="Orange" image="images/orange.png" amount="63 Category"></Category>
      </div>
      
      <div class="wrapperDown">
        <Promotions color="#F0E8D5" image="images/onion.png"
          description="Everyday Fresh & Clean with Our Products"></Promotions>
        <Promotions color="#F3E8E8" image="images/strawberryJuice.png"
          description="Make your Breakfast Healthy and Easy"></Promotions>
        <Promotions color="#E7EAF3" image="images/vegetable.png"
          description="The best Organic Products Online"></Promotions>
      </div>
      
    </div>
  </div>
  <RouterView />
</template>

<style>
#app{
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.container{
  display: flex;
  flex-direction: column;
  width: 100rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.wrapperUp{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}

.wrapperDown{

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}
</style>