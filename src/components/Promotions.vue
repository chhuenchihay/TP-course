<template>
    <button class="Promotion" :style="{ backgroundColor: color}">
        <img :src="image" class="categoriesImage" >
        <h2 :class="description" class="description" >{{ description }}</h2>
        <Buttons :color=buttonColor :description="description"></Buttons>
    </button>
</template>

<script>
import Buttons from './Buttons.vue';

export default {
    components: {
        Buttons,
    },
    name: "Promotions",
    props: ["color", "description", "image", "buttonColor"],

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
.Promotion{
    position: relative;
    width: 32rem;
    height: 19rem;
    border: none;
    border-radius: 0.5rem;
}

.categoriesImage{
    position: absolute;
    right: 0.25rem;
    bottom: 0.25rem;
}

.description{
    font-family: 'Poppins', sans-serif;
    position: absolute;
    left: 2rem;
    top: 25%;
    white-space: normal;
    width: 15rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
}

</style>