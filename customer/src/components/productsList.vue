<template>
  <div class="row">
    <div class="column" v-for="product in products" v-bind:key="product._id">
      <div class="card">
        <img v-bind:src="product.ProductImage" class="img1" alt="Image" />
        <p>Product Name: {{ product.ProductName }}</p>
        <p>Product Price: {{ product.ProductPrice }} Rs/day</p>
        <p>Product Color: {{ product.ProductColor }}</p>
        <p>Product Category: {{ product.ProductCategory }}</p>
        <h3>
          <button @click="handleClick(product._id)" class="buy-button">
            Buy on rent
          </button>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "productList",
  data() {
    return {
      products: [],
    };
  },
  created: function () {
    this.get_all_products();
  },
  methods: {
    async get_all_products() {
      try {
        const response = await axios.get(`http://localhost:5000/products`);
        console.log(response);
        this.products = response.data.products;
      } catch (err) {
        console.log(err);
      }
    },
    handleClick(productId) {
      this.$router.push(`/selectedProduct/${productId}`);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 15%;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 0 10px;
  border-style: ridge;
}
.buy-button {
  background-color: rgb(12, 12, 59);
  border: none;
  color: white;
  border-radius: 12px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  cursor: pointer;
}
/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.img1 {
  height: 120px;
  width: 70%;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
