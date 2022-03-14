<template>
  <div>
    <Dashboard />
    <div class="main-container">This is All Orders page</div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
export default {
  name: "All_Orders",
  components: {
    Dashboard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  margin-top: 5%;
  margin-left: 20%;
}
</style>
