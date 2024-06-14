<template>
    <div id="mainPage">
       <div id="descriptionMainPage">
        <img id="mainPageImg" src="./assets/main-page-img.jpg">
        <div id="textContainer">
            <h2 id="mainPageText">BEAUTY SALON AND AESTHETIC CLINIC</h2>
            <p id="smallText">Beauty salon offers a comprehensive 
            portfolio of face and body services to treat any beauty, aesthetic and well-being concerns.
             <br><br>Choose from manicure/pedicure, hair, lash/brow treatments, makeup, and even face massage. Experience the ultimate treatment!</p> 
             <router-link id="bookNowButton" to="/BookNow">Book Now</router-link>
       </div>
       </div>
       <h3>Services</h3>
       <imageSlider></imageSlider>
   
        <div id="aboutSalon">
            <div class="informations">
                LARGE VARIETY OF SPECIALISTS<br><br>
            Certified, well-trained specialists, therapists, dermatologists and nail technicians with extensive experience, serve you.
            </div>
            <div class="informations">
                INDIVIDUAL CARING AND HONEST APPROACH<br><br>
                No face, body, hands, feet, hair are the same. Our team always tailor-makes treatments to achieve your desired results.
            </div>
            <div class="informations">
                UNIQUE TREATMENTS AND PRODUCTS<br><br>
                We source the latest innovations, products and devices for your beauty and aesthetic needs.
            </div>
            <div class="informations">
                WIDE CHOICE OF SERVICES<br><br>
                Only top-quality treatments performed by highly qualified professionals all in one place.
            </div>
        </div>
    </div>
    
</template>
<script>
import imageSlider from './components/imageSlider.vue'
export default{
    components: {
        imageSlider
    }
}
</script>