<template>
    <h2>Price list</h2>
    <h3 class="category">Massages</h3>
    <div class="priceList">
        <ul v-for="massagePrice in massagePrices" :key=massagePrice.id>
        <span class="bullet">&#8226;</span>
        <span class="service">{{ massagePrice.service }}</span>
        <span class="price">{{ massagePrice.price }} £</span>
        </ul>
    </div>
    <h3 class="category">Eyebrows & Eyelashes</h3>
    <div class="priceList">
        <ul v-for="lashesBrowsPrice in lashesBrowsPrices" :key=lashesBrowsPrice.id>
        <span class="bullet">&#8226;</span>
        <span class="service">{{ lashesBrowsPrice.service }}</span>
        <span class="price">{{ lashesBrowsPrice.price }} £</span>
        </ul>
    </div>
    <h3 class="category">Nails Care</h3>
    <div class="priceList">
        <ul v-for="nailsPrice in nailsPrices" :key=nailsPrice.id>
        <span class="bullet">&#8226;</span>
        <span class="service">{{ nailsPrice.service }}</span>
        <span class="price">{{ nailsPrice.price }} £</span>
        </ul>
    </div>
    <h3 class="category">Waxing</h3>
    <div class="priceList">
        <ul v-for="waxPrice in waxPrices" :key=waxPrice.id>
        <span class="bullet">&#8226;</span>
        <span class="service">{{ waxPrice.service }}</span>
        <span class="price">{{ waxPrice.price }} £</span>
        </ul>
    </div>
    <h3 class="category">Make up</h3>
    <div class="priceList">
        <ul v-for="makeupPrice in makeupPrices" :key=makeupPrice.id>
        <span class="bullet">&#8226;</span>
        <span class="service">{{ makeupPrice.service }}</span>
        <span class="price">{{ makeupPrice.price }} £</span>
        </ul>
    </div>
</template>
<script>
export default{
    data() {
        return {
            massagePrices: [
                {id: 1, service:"Classical Face Lift Massage", price:60},
                {id: 2, service:"Classical Body Massage", price: 80},
                {id: 3, service:"Neck,Back & Shoulders Massage", price: 40},
                {id: 4, service:"Pregnancy Massage", price: 75},
                {id: 5, service:"Head Massage", price: 40},
                {id: 6, service:"Vacuum Cup Anti-cellulite Massage", price: 85},
                {id: 7, service:"Hot Stones Massage", price:45},
                {id: 8, service:"Couples Massage - Classic Package", price: 145},
            ],
            lashesBrowsPrices: [
                {id: 1, service:"Classic Eyelash Extensions", price: 110},
                {id: 2, service:"Hybrid Eyelash Extensions", price: 120},
                {id: 3, service:"Lash Removal", price: 30},
                {id: 4, service:"Hybrid Eyelash Extensions", price: 120},
                {id: 5, service:"Lash Lift and Tint", price: 30},
                {id: 6, service:"Eyebrow Tint", price: 12},
                {id: 7, service:"Brow Lamination", price: 58},
            ],
            nailsPrices: [
                {id:1, service:"French Finish", price:15},
                {id:2, service:"Express Manicure", price:25},
                {id:3, service:"Express Gel Manicure", price:35},
                {id:4, service:"Express Pedicure", price:25},
                {id:5, service:"Express Gel Pedicure", price:55},
                {id:6, service:"Gel Removal", price: 20},
            ],
            waxPrices: [
                {id: 1, service:"Brow Wax", price:15},
                {id: 2, service:"Full Arm Wax", price:30},
                {id: 3, service:"Full Leg Wax", price:55},
                {id: 4, service:"Bikini Wax", price:25},
                {id: 5, service:"Stomach Wax", price:35},
                {id: 6, service:"Underarm Wax", price:20}
            ],
            makeupPrices: [
                {id:1, service:"Bridal Make up", price:200},
                {id:2, service:"Daily Make up", price:120},
                {id:3, service:"Occasional Make up", price:160}
            ]
        }
    }
}
</script>
