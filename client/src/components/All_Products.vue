<template>
  <div class="hello">
    <Dashboard />
    <div id="main-container">
      <h1>Available Products on your website</h1>
      <div style="overflow-x: auto">
        <table>
          <tr>
            <th>Model Name</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Product Color</th>
            <th>Update Product</th>
            <th>Delete Product</th>
          </tr>
          <tr v-for="product in products" v-bind:key="product._id">
            <td>{{ product.ProductModel }}</td>
            <td>{{ product.ProductName }}</td>
            <td>{{ product.ProductCategory }}</td>
            <td>{{ product.ProductPrice }} Rs/day</td>
            <td>
              <img
                v-bind:src="product.ProductImage"
                class="product-img"
                alt="Image"
              />
            </td>
            <td>{{ product.ProductColor }}</td>
            <td><button class="update-user">Update</button></td>
            <td><button class="delete-user">Delete</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import axios from "axios";
export default {
  name: "AllProducts",
  data() {
    return {
      products: [],
    };
  },
  components: {
    Dashboard,
  },
  created: function () {
    this.get_all_products();
  },
  methods: {
    // Get User By Id
    async get_all_products() {
      try {
        const response = await axios.get(`http://localhost:5000/products`);
        console.log(response);
        this.products = response.data.products;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-container {
  margin-top: 5%;
  margin-left: 15%;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.product-img {
  height: 120px;
}
.delete-user {
  background-color: rgb(228, 40, 40);
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
}
.delete-user:hover {
  background-color: rgb(102, 14, 14);
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
}
.update-user {
  background-color: rgb(12, 12, 59);
  border: none;
  color: white;
  border-radius: 12px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
