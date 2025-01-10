<script>
// import { defineAsyncComponent } from "vue";
import Header from "./Header.vue";
import Home from "./Home.vue";
import Footer from "./Footer.vue";
import Prepare from "prepare/Prepare";
import Post from "post/Post";
// const Prepare = defineAsyncComponent(() => import("prepare/Prepare"));

export default {
  components: {
    Header,
    Home,
    Footer,
    Prepare,
    Post,
  }  
}
</script>

<template>
  <div class="container">
    <v-layout>
    <Header />
    <!-- <Prepare /> -->
    <!-- <div>
      <router-view></router-view>
    </div> -->
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <router-view></router-view>
      </v-main>
    <!-- <Home /> -->
    <!-- <div class="text-3xl bg-blue-900 text-white p-5 flex">
      <div class="font-bold mr-5">
        Header
      </div>
    </div> -->
    <!-- <div>Name: host</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> -->
    <Footer />
    </v-layout>
  </div>
</template>