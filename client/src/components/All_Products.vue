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
            <td>
              <button class="update-user" @click="openForm(product)">
                Update
              </button>
              <div class="form-popup" id="myForm">
                <img
                  v-bind:src="this.productImage"
                  class="product-img"
                  alt="Image"
                /><br />
                <label for="productName">Product Name:</label><br />
                <input
                  type="text"
                  id="productName"
                  v-model="this.productName"
                  required
                />
                <label for="productCategory">Product Category:</label><br />
                <input
                  type="text"
                  id="productCategory"
                  v-model="this.productCategory"
                  required
                />
                <label for="productPrice">Product Price:</label><br />
                <input
                  type="text"
                  id="productPrice"
                  v-model="this.productPrice"
                  required
                />
                <label for="productColor">Product Color:</label><br />
                <input
                  type="text"
                  id="ProductColor"
                  v-model="this.productColor"
                  required
                />
                <button
                  type="button"
                  class="update-user"
                  @click="updateProduct()"
                >
                  Update
                </button>
                <button type="button" class="delete-user" @click="closeForm()">
                  Cancel
                </button>
              </div>
            </td>
            <td>
              <button class="delete-user" @click="deleteProduct(product._id)">
                Delete
              </button>
            </td>
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
      productName: "",
      productCategory: "",
      productPrice: "",
      productColor: "",
      productImage: "",
    };
  },
  components: {
    Dashboard,
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
    async updateProduct() {
      try {
        await axios.put(
          `http://localhost:5000/products/update/${this.productId}`,
          {
            ProductName: this.productName,
            ProductCategory: this.productCategory,
            ProductPrice: this.productPrice,
            ProductColor: this.productColor,
          }
        );

        this.get_all_products();
        this.closeForm();
      } catch (err) {
        console.log(err);
      }
    },
    openForm(product) {
      document.getElementById("myForm").style.display = "block";
      this.productId = product._id;
      this.productName = product.ProductName;
      this.productCategory = product.ProductCategory;
      this.productPrice = product.ProductPrice;
      this.productColor = product.ProductColor;
      this.productImage = product.ProductImage;
    },

    closeForm() {
      document.getElementById("myForm").style.display = "none";
    },

    async deleteProduct(productId) {
      let text = "Are you sure to delete this product?";
      if (confirm(text) == true) {
        try {
          await axios.delete(`http://localhost:5000/products/${productId}`);
          this.get_all_products();
        } catch (err) {
          console.log(err);
        }
      } else {
        this.get_all_products();
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
input[type="text"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
th,
td {
  text-align: left;
  padding: 8px;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
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
.form-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32em;
  height: 30em;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -15em; /*set to a negative number 1/2 of your width*/
  border: 1px solid rgb(143, 137, 137);
  background-color: #f3f3f3;
  display: none;
  padding: 30px;
}
</style>
