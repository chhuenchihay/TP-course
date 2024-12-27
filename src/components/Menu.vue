<template>
    <div class="menu">
        <h1 class="name" >{{ name }}</h1>
        <div class="wrapper">
            <button>All</button>
            <button>Milks & Dairies</button>
            <button>Coffes & Teas</button>
            <button>Pet Foods</button>
            <button>Meats</button>
            <button>Vegetables</button>
            <button>Fruits</button>
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
    name: "Menu",
    props: ["name"]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.menu{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: 100%;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
}

.name{
    font-family: 'Poppins', sans-serif;
    color: rgb(50, 51, 50);
}

.wrapper{
    display: flex;
    gap: 1rem;
}

button{
    border: none;
    font-size: larger;
    font-family: 'Poppins', sans-serif;
    background-color: white;
}

</style>