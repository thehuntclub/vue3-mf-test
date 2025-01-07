<script>
  import Header from 'host/Header';
  import Footer from 'host/Footer';
  import Prepare from './Prepare.vue';

  export default {
    components: {
      Header,
      Footer,
      Prepare
    }
  }
</script>

<template>
  <div class="container">
    <Header />
    <Prepare />
    <!-- <div>Name: pre</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> -->
    <Footer />
  </div>
</template>