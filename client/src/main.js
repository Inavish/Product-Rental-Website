import * as Vue from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";

import AdminLogin from "./components/AdminLogin.vue";
import All_Products from "./components/All_Products.vue";
import Add_Products from "./components/Add_Products.vue";
import All_Orders from "./components/All_Orders.vue";
const routes = [
  {
    name: "AdminLogin",
    path: "/",
    component: AdminLogin,
  },

  {
    name: "All_Products",
    path: "/allProducts",
    component: All_Products,
  },
  {
    name: "Add_Products",
    path: "/addProducts",
    component: Add_Products,
  },
  {
    name: "All_Orders",
    path: "/allOrders",
    component: All_Orders,
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

Vue.createApp(App).use(router).mount("#app");
