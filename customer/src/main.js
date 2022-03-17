import * as Vue from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";

import indexPage from "./components/indexPage.vue";
import selectedProduct from "./components/selectedProduct.vue";
const routes = [
  {
    name: "indexPage",
    path: "/",
    component: indexPage,
  },

  {
    name: "selectedProduct",
    path: "/selectedProduct/:name",
    component: selectedProduct,
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

Vue.createApp(App).use(router).mount("#app");
