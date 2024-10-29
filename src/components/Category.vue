<template>
    <button class="item" :style="{ backgroundColor: color}">
        <img :src="image" class="image">
        <div class="box">
            <h3 :class="name" class="name" >{{ name }}</h3>
            <h4 :class="amount" class="amount" >{{ amount }}</h4>
        </div>
    </button>
</template>

<script>
export default {
    name: "Category",
    props: ["color", "name", "amount", "image"]
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.item{
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    width: 8.75rem;
    height: 11.25rem;
    border: none;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
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