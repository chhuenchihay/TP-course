<template>
    <button class="button" :style="{ backgroundColor: color }">
        Section {{ secNum }}
    </button>
</template>

<script>
export default {
    name: "SectionButtons", // Component name should be a string
    props: {
        secNum: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            color: "#4CAF50", // Example color, can be customized
        };
    },
};
</script>

<style scoped>
.button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}
</style>
