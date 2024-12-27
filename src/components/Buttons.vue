<template>
    <button @click="shopNow(Promotions)" class="button" :style="{ backgroundColor: color}">
        <p> Shopping → </p>
    </button>
</template>

<script>
export default {
    name: "Buttons",
    props: {
        color: String,
        title: String
    },

    methods: {
        shopNow(Promotions) {
            alert("Let's shop! " + this.title);
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.button{
    font-family: 'Poppins', sans-serif;
    color: aliceblue;
    position: absolute;
    left: 2rem;
    bottom: 3rem;
    width: 7.5rem;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>