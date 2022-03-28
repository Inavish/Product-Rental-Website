<template>
  <div class="hello">
    <navbar />
    <carousel />
    <productList />
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import carousel from "./carousel.vue";
import productList from "./productsList.vue";

export default {
  name: "indexPage",
  props: {},
  components: {
    navbar,
    carousel,
    productList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
