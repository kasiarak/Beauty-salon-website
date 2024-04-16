<template>
    <div id = "imageSlider">
        <button @click = "prev()" id="prevBtn">&#706;</button>
        <div id = "slideContainer">
        <div id = "slider">
        <div class = "slide">Nails Care<img class = "slideImg" src = "../assets/nail-svgrepo-com.svg"></div>
        <div class = "slide">Massages<img class = "slideImg" src = "../assets/massage-spa-svgrepo-com.svg"></div>
        <div class = "slide">Make Up<img class = "slideImg" src = "../assets/lipstick-svgrepo-com.svg"></div>
        <div class = "slide">Eyebrow Extension<img class = "slideImg" src = "../assets/brow-svgrepo-com.svg"></div>
        <div class = "slide">Waxing<img class = "slideImg" src = "../assets/wax-svgrepo-com.svg"></div>
        <div class = "slide">Eyelash Extension<img class = "slideImg" src = "../assets/lashes-svgrepo-com.svg"></div>
    </div>
   </div>
   <button @click = "next()" id="nextBtn">&#707;</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        updateSlide(slideWidth) {
            const slider = document.getElementById('slider');
            const transformLength = slideWidth * this.counter;
            slider.style.transform = `translateX(${transformLength}px)`;
        },
        next() {
            this.counter++;
            if (this.counter === 4) {
                this.counter = -3;
            }
            this.updateSlide(-100);
        },
        prev() {
            this.counter--;
            if (this.counter < -3) {
                this.counter = 3;
            }
            this.updateSlide(-100);
        }
    },
   
};
</script>