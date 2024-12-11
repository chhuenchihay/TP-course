<template>
    <button class="button" @click="goToPage()" :style="{ backgroundColor: color }">
        Page {{ name }}
    </button>
</template>

<script>
export default {
    name: "PageButtons", // Component name should be a string
    props: {
        name: {
            type: String,
            required: true,
        },

        route: {
            type: String,
            required: true,
        },
    },

    methods: {
        goToPage() {
            this.$router.push(this.route);
        }
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
