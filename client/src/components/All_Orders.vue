<template>
  <div>
    <Dashboard />
    <div class="main-container">
      <h1>All Orders Details</h1>
      <table>
        <tr>
          <th>User Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Address</th>
          <th>From Date</th>
          <th>To Date</th>
          <th>Total Days</th>
          <th>Total Prize</th>
          <th>Ordered On</th>
          <th>Ordered Product</th>
        </tr>
        <tr v-for="order in orders" v-bind:key="order._id">
          <td>{{ order.firstName }} {{ order.lastName }}</td>
          <td>{{ order.email }}</td>
          <td>{{ order.contact }}</td>
          <td>{{ order.address }}</td>
          <td>{{ order.fromDate }}</td>
          <td>{{ order.toDate }}</td>
          <td>{{ order.totalDays }} Days</td>
          <td>{{ order.totalPrize }} Rs.</td>
          <td>
            <button class="update-user" @click="openForm(order)">
              Product Details
            </button>
            <div class="form-popup" id="myForm">
              <p>
                <img
                  v-bind:src="this.ProductImage"
                  class="product-img"
                  alt="Image"
                />
              </p>
              <p>Model: {{ this.productModel }}</p>
              <p>Product Name: {{ this.productName }}</p>
              <p>Price: {{ this.productPrize }} Rs.</p>
              <p>Colour: {{ this.productColor }}</p>
              <p>Category: {{ this.productCategory }}</p>
              <button type="button" class="btn cancel" @click="closeForm()">
                Close
              </button>
            </div>
          </td>

          <td>
            <button @click="deleteOrder(order._id)" class="delete-order">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Dashboard from "./Dashboard.vue";
export default {
  name: "All_Orders",
  components: {
    Dashboard,
  },
  data() {
    return {
      orders: [],
      productName: "",
      ProductImage: "",
      productModel: "",
      productPrize: "",
      productColor: "",
      productCategory: "",
    };
  },
  created: function () {
    this.get_all_orders();
  },
  methods: {
    openForm(order) {
      document.getElementById("myForm").style.display = "block";
      this.productName = order.productInfo.ProductName;
      this.ProductImage = order.productInfo.ProductImage;
      this.productModel = order.productInfo.ProductModel;
      this.productPrize = order.productInfo.ProductPrice;
      this.productColor = order.productInfo.ProductColor;
      this.productCategory = order.productInfo.ProductCategory;
    },

    closeForm() {
      document.getElementById("myForm").style.display = "none";
    },
    async get_all_orders() {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_ROOT_API}/order`,
          {
            headers: { authorization: localStorage.getItem("token") },
            //take the token from localStorage and put it on headers ('authorization is my own header')
          }
        );
        console.log(response.data.order);
        this.orders = response.data.order;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteOrder(orderId) {
      let text = "Are you sure to delete this order?";
      if (confirm(text) == true) {
        try {
          await axios.delete(
            `${process.env.VUE_APP_ROOT_API}/order/${orderId}`,
            {
              headers: { authorization: localStorage.getItem("token") },
              //take the token from localStorage and put it on headers ('authorization is my own header')
            }
          );
          this.get_all_orders();
        } catch (err) {
          console.log(err);
        }
      } else {
        this.get_all_orders();
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
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: center;
  border-style: ridge;
  padding: 5px;
  width: 10%;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.product-img {
  height: 120px;
}
.delete-order {
  background-color: rgb(184, 11, 11);
  border: none;
  color: white;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  width: 100px;
  margin: 4px 2px;
  cursor: pointer;
}
.update-user {
  background-color: rgb(12, 12, 59);
  border: none;
  color: white;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  width: 100px;
  margin: 4px 2px;
  cursor: pointer;
}

/* The popup form - hidden by default */
.form-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30em;
  height: 25em;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -15em; /*set to a negative number 1/2 of your width*/
  border: 1px solid #ccc;
  background-color: #f3f3f3;
  display: none;
}
</style>
