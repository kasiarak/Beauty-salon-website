<template>
  <div>
    <header id="banner">
      <pageHeader></pageHeader>
      <PageNavbar></PageNavbar>
    </header>
    <ScrollUpBtn></ScrollUpBtn>
    <router-view />
    <footer>
      <PageFooter></PageFooter>
    </footer>
  </div>
</template>

<script>
  import PageHeader from './components/PageHeader.vue';
  import PageNavbar from './components/PageNavbar.vue'; 
  import ScrollUpBtn from './components/ScrollUpBtn.vue';
  import PageFooter from './components/PageFooter.vue';
  export default{
    components: {
      PageHeader,
      PageNavbar,
      ScrollUpBtn,
      PageFooter
    }
  }
</script>


