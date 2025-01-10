<script>
  import Header from 'host/Header';
  import Footer from 'host/Footer';
  import Post from './Post.vue';

  export default {
    components: {
      Header,
      Footer,
      Post
    }
  }
</script>

<template>
  <div class="container">
    <v-layout>
      <Header />
      <Post />
      <Footer />
    </v-layout>
  </div>
</template>
