<template>
  <div>
    <Dashboard />
    <div class="main-container">
      <h1>Add Products to website</h1>
      <p>
        Resize the browser window to see the effect. When the screen is less
        than 600px wide, make the two columns stack on top of each other instead
        of next to each other.
      </p>

      <div class="container">
        <div class="row">
          <div class="col-25">
            <label for="ProductModel">Model</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="ProductModel"
              v-model="ProductModel"
              placeholder="Model.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="ProductName">Product Name</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="Product Name"
              v-model="ProductName"
              placeholder="Product name.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="ProductCategory">Product Category</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="ProductCategory"
              v-model="ProductCategory"
              placeholder="Product Category.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="ProductPrice">Product Price</label>
          </div>
          <div class="col-75">
            <input
              type="number"
              id="ProductPrice"
              v-model="ProductPrice"
              placeholder="Product Price.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="ProductColor">Product Color</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="ProductColor"
              v-model="ProductColor"
              placeholder="Product Color.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="ProductImage">Product Image</label>
          </div>
          <div class="col-75">
            <input
              type="file"
              id="ProductImage"
              accept="image/*"
              @change="onFileChanged"
            />
          </div>
        </div>
        <div class="row">
          <button @click="addProduct">Add Product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import axios from "axios";
export default {
  name: "Add_Products",
  components: {
    Dashboard,
  },
  data() {
    return {
      ProductModel: "",
      ProductName: "",
      ProductCategory: "",
      ProductPrice: "",
      ProductImage: null,
      ProductColor: "",
    };
  },
  methods: {
    onFileChanged(event) {
      this.ProductImage = event.target.files[0];
    },
    async addProduct() {
      if (
        this.ProductImage &&
        this.ProductModel &&
        this.ProductName &&
        this.ProductPrice &&
        this.ProductColor &&
        this.ProductCategory
      ) {
        const productData = new FormData();
        productData.append("ProductImage", this.ProductImage);
        console.log(this.ProductImage);
        productData.append("ProductModel", this.ProductModel);
        productData.append("ProductName", this.ProductName);
        productData.append("ProductPrice", this.ProductPrice);
        productData.append("ProductColor", this.ProductColor);
        productData.append("ProductCategory", this.ProductCategory);
        console.log("check shivani");
        console.log(productData);
        await axios
          .post("http://localhost:5000/products", productData)
          .then((res) => {
            console.log(res);
            (this.ProductModel = ""),
              (this.ProductName = ""),
              (this.ProductCategory = ""),
              (this.ProductPrice = ""),
              (this.ProductImage = null),
              (this.ProductColor = "");
          });
        alert("Product Added successfully");
      } else {
        alert("All fields are required*");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  margin-top: 5%;
  margin-left: 15%;
}
* {
  box-sizing: border-box;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
#ProductPrice {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
  background-color: black;

  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 50%;
}

input[type="submit"]:hover {
  background-color: #212221;
}
button {
  background-color: black;

  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 50%;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
