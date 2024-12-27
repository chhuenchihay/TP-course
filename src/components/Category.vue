<template>
    <div class="item" :style="{ backgroundColor: color}">
        <div class="Image"><img :src="image" class="image"></div>
        <div class="box">
            <h3 class="name" >{{ name }}</h3>
            <h4 class="amount" >{{ productCount }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "Category",
    // props: ["color", "name", "amount", "image"]
    props:{
        color: String,
        name: String,
        image: String,
        productCount: Number
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.item{
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    width: 10rem;
    height: 13.25rem;
    border: none;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
}
.Image{
    width: 100%;
    height: 60%;
}
.Image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.amount{
    font-size: 0.9rem;
    color: #666;
    text-align: center;
    margin: 0.25rem 0 0 0;
    line-height: 1.2;
}

.name{
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    line-height: 1.2;
}


</style>