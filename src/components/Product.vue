<template>
    <div class="product">
        <div>
            <div class="status"> 30% </div>
        </div>
        <img :src="image" class="image">
        <div class="foodType">Hondo Food</div>
        <div class="description">Sweet and fresh big apple</div>
        <div class="rating">(4.0)</div>
        <div class="weight">500 g</div>
        <div class="label">
            <div class="price">10$</div>
            <input type="number" value="1" min="1" max="10">
        </div>
    </div>
    <!-- <button class="item" :style="{ backgroundColor: color}">
        <img :src="image" class="image">
        <div class="box">
            <h3 :class="name" class="name" >{{ name }}</h3>
            <h4 :class="amount" class="amount" >{{ amount }}</h4>
        </div>
    </button> -->
</template>

<script>
export default {
    name: "Product",
    props: ["image"]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.product{
    display: flex;
    flex-direction: column;
}

.label{
    display: flex;
    justify-content: space-between;
}
</style>