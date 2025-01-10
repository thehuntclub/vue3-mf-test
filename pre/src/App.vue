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
    <v-layout>
      <Header />
      <Prepare />
      <Footer />
    </v-layout>
  </div>
</template>
