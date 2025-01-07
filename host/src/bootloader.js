import { createApp } from "vue";
import * as VueRouter from "vue-router";

import "./index.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import App from "./App.vue";
import Home from "./Home.vue";
import Prepare from "prepare/Prepare"

const routes = [
    { path: "/", component: Home },
    { path: "/prepare", component: Prepare },
  ];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  });

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

createApp(App).use(router).use(vuetify).mount("#app");

// createApp(App).use(vuetify).mount("#app");