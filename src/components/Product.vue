<template>

    <div class="product">
        <div class="promotionAsPercentage">- {{ promotionAsPercentage }} %</div>
        <div class="container">
            <div class="Image">
                <img :src="image" class="image">
            </div>
            <div class="foodType">Hondo Food</div>
            <div class="name">{{ name }}</div>
            <div class="rating">
                <div class="stars">
                    ⭐⭐⭐⭐
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                                stroke="#e7e00d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </div>
                ({{ rating }})
            </div>
            <div class="size">{{ size }} gram</div>
            <div class="label">
                <div class="priceTag">
                    <div class="price">${{ price }}</div>
                    <div class="instock">{{ instock }}</div>
                </div>
                <div id="adjustBtn" class="adjustBtn">
                    {{ quantity }}
                    <div class="arrows">
                        <button id="upperArrow" class="upperArrow" @click="increaseAmount()">
                            <svg width="1.25rem" height="1.25rem" viewBox="0 -4.5 20 20" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                fill="#3BB77E">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>arrow_up [#337]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)"
                                            fill="#3BB77E">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path
                                                    d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378"
                                                    id="arrow_up-[#337]"> </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>

                        <button id="lowerArrow" class="lowerArrow" @click="decreaseAmount()">
                            <svg width="1.25rem" height="1.25rem" viewBox="0 -4.5 20 20" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                fill="#3BB77E">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>arrow_down [#338]</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)"
                                            fill="#3BB77E">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path
                                                    d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                                                    id="arrow_down-[#338]"> </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Product",
    props: {
        name: String,
        rating: Number,
        size: String,
        image: String,
        price: Number,
        promotionAsPercentage: Number,
        countSold: Number,
        instock: String,
    },

    data() {
        return {
            quantity: 1 // Initialize quantity
        };
    },
    methods: {
        increaseAmount() {
            this.quantity += 1; // Increment quantity
        },
        decreaseAmount() {
            if (this.quantity > 1) {
                this.quantity -= 1; // Decrement quantity
            }
        }
    }

};


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

.product {
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 30rem;
    width: 18rem;
    border-radius: 1rem;
    border: solid 0.125rem rgb(223, 220, 220);
    gap: 0.5rem;
    padding-top: 1rem;
}

.Image{
    width: 100%;
    height: 11rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Image img{
    width: fit-content;
    height: fit-content;
}

.promotionAsPercentage {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    background-color: rgb(32, 224, 160);
    width: 5rem;
    height: 3rem;
    border-radius: 0 15px 15px 0;
}

.name {
    font-size: large;
    font-weight: 600;
    color: rgb(63, 62, 62);
}

.label {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rating {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.priceTag {
    display: flex;
    gap: 0.5rem;
    align-items: baseline;
}

.foodType {
    font-size: medium;
    color: rgb(106, 106, 104);
}

.price {
    font-size: xx-large;
    color: rgb(32, 224, 160);
    font-weight: 600;
}

.instock {
    font-size: x-large;
    color: rgb(106, 106, 104);
    text-decoration: line-through;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem;
}

.stars {
    display: flex;
    align-items: center;
}

button{
    border: none;
    background-color: white;
}

.adjustBtn {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: solid 0.17rem rgb(32, 224, 160);
    padding: 0.25rem;
    border-radius: 0.75rem;
    font-size: large;
}

.arrows {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
</style>
