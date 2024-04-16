<template>
    <div id = "scrollUpBtn">
        <div @click = "scrollUp()" id = "arrow">&#10132;</div>
    </div>
</template>
<script>
export default{
    methods: {
        scrollUp(){
            window.scrollTo({
            top: 0,
            behavior: 'smooth'});
        }
    }
}
</script>