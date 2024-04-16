<template>
    <div class = "serviceDescription">
        <div class = "serviceDescriptionImgContainer">
            <img class = "serviceDescriptionImg" :src ="require(`@/assets/${imgSrc}`)">
        </div>
        <div class = "serviceDescriptionTextContainer" ref="serviceDescriptionTextContainer">
            <h3 class = "serviceTitle">{{title}}</h3>
            <p class = "serviceDescriptionText" v-html="formattedDescription"></p>
        </div>
        <div @click = "readMore()" class="expandBtn" ref="expandBtn">&#8964;</div>
    </div>
</template>
<script>
export default{
    props :{
        imgSrc: String, 
        title: String,
        description: String
    },
    computed: {
    formattedDescription() {
      return this.description.replace(/#br#/g, '<br>');
    }
  },
    methods: {
        readMore(){
            const serviceDescription = this.$el;
            const expandBtn = this.$refs.expandBtn;
            const serviceDescriptionHeight = window.getComputedStyle(serviceDescription).height;
            const serviceDescriptionTextContainer = this.$refs.serviceDescriptionTextContainer;
            const serviceDescriptionTextContainerHeight = serviceDescriptionTextContainer.scrollHeight;
            if(serviceDescriptionHeight === '200px'){
                serviceDescription.style.height = `${serviceDescriptionTextContainerHeight+5}px`; 
                serviceDescription.style.transition = '1s'; 
                expandBtn.style.transform = 'rotate(180deg)';
                expandBtn.style.transition = '1s';
                expandBtn.style.bottom = '-7vh';
            }else{
                serviceDescription.style.height = '200px'; 
                serviceDescription.style.transition = '1s'; 
                expandBtn.style.transform = 'rotate(0)';
                expandBtn.style.transition = '1s';
                expandBtn.style.bottom = '1vh';
            }
        }
    }
}
</script>