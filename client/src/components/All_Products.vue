<template>
  <div class="hello">
    <Dashboard />
    <div>
      <div id="main-container">Hii, you are logged in now</div>
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
export default {
  name: "AllProducts",
  components: {
    Dashboard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-container {
  margin-top: 5%;
  margin-left: 20%;
}
</style>
