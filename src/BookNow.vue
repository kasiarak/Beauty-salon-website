<template id = "bookNow">
<div id = "bookNow">
  <h2>Book Now</h2>  
  <h3 v-if="isSubmitted">&#10003; Your service has been booked! Check the email message.</h3>
<form @submit.prevent="submit">
    <input v-model ="name" type="text" placeholder="Name"><br>
    <input v-model = "surname" type="text" placeholder="Surname"><br>
    <input v-model = "phoneNumber" type="tel" placeholder="Phone Number"><br>
    <input v-model = "email" type="email" placeholder="E-mail"><br>
    <label>Date:</label>
    <input v-model = "selectedDate" id = "date" type="date">
    <input v-model = "selectedHour" id = "hour" type = "time"><br>
    <label>Service:</label>
    <select v-model="selectedService">
        <option v-for="Service in Services" :key=Service.id :value=Service.service>{{ Service.service }}</option>
    </select>
    <input id = "submit" type="submit" value="Book Now">
</form>
</div>

</template>
<script>
export default{
    data() {
        return{
            Services: [
            {id: 1, service:"Classical Face Lift Massage"},
            {id: 2, service:"Classical Body Massage"},
            {id: 3, service:"Neck,Back & Shoulders Massage"},
            {id: 4, service:"Pregnancy Massage"},
            {id: 5, service:"Head Massage"},
            {id: 6, service:"Vacuum Cup Anti-cellulite Massage"},
            {id: 7, service:"Hot Stones Massage"},
            {id: 8, service:"Couples Massage - Classic Package"},
            {id: 9, service:"Classic Eyelash Extensions"},
            {id: 10, service:"Hybrid Eyelash Extensions"},
            {id: 11, service:"Lash Removal"},
            {id: 12, service:"Hybrid Eyelash Extensions"},
            {id: 13, service:"Lash Lift and Tint"},
            {id: 14, service:"Eyebrow Tint"},
            {id: 15, service:"Brow Lamination"},
            {id: 16, service:"French Finish"},
            {id: 17, service:"Express Manicure"},
            {id: 18, service:"Express Gel Manicure"},
            {id: 19, service:"Express Pedicure"},
            {id: 20, service:"Express Gel Pedicure"},
            {id: 21, service:"Gel Removal"},
            {id: 22, service:"Brow Wax"},
            {id: 23, service:"Full Arm Wax"},
            {id: 24, service:"Full Leg Wax"},
            {id: 25, service:"Bikini Wax"},
            {id: 26, service:"Stomach Wax"},
            {id: 27, service:"Underarm Wax"},
            {id: 28, service:"Bridal Make up"},
            {id: 29, service:"Daily Make up"},
            {id: 30, service:"Occasional Make up"}
            ],
            isSubmitted: false,
            name: '',
            surname: '',
            phoneNumber: '',
            email: '',
            selectedDate: '',
            selectedHour: '',
            selectedService: ''
        }
    },
    methods: {
            submit(){
                if(!this.name || !this.surname || !this.phoneNumber || !this.email || !this.selectedDate || !this.selectedHour || !this.selectedService){
                    window.alert("Please complete all fields!")
                }else{
                    this.isSubmitted = true; 
                    window.scrollTo({
                    top: 0,
                    behavior: 'smooth'});
                }
            }
    }
};
</script>