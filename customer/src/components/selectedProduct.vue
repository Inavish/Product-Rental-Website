<template>
  <div>
    <navbar />
    <div class="main-container">
      <div class="product-info">
        <img v-bind:src="productInfo.ProductImage" class="img1" alt="Image" />
        <p>Product Name: {{ productInfo.ProductName }}</p>
        <p>Product Price: {{ productInfo.ProductPrice }} Rs/day</p>
        <p>Product Color: {{ productInfo.ProductColor }}</p>
        <p>Product Category: {{ productInfo.ProductCategory }}</p>
      </div>
      <div class="user-detail">
        <div class="div1">
          <h3>Enter Your Details</h3>
          <label for="firstName">First Name</label><br />
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            placeholder="Your name.."
            required
          /><br />
          <label for="lastName">Last Name</label><br />
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            placeholder="Your name.."
            required
          /><br />

          <label for="email">Email</label><br />
          <input
            type="email"
            id="lname"
            v-model="email"
            placeholder="Your Email"
            required
          />
          <br />
          <label for="contact">Contact</label><br />
          <input
            type="text"
            id="contact"
            v-model="contact"
            placeholder="Your Contact"
            required
          />
          <br />

          <label for="address">Address</label><br />
          <input
            type="text"
            id="address"
            v-model="address"
            placeholder="Your address"
            required
          />
        </div>

        <div class="div3">
          <h3>Enter Duration for renting out this product:</h3>
          <label for="fromDate">From Date</label><br />
          <input type="date" id="fromDate" v-model="fromDate" required /><br />
          <label for="toDate">To Date</label><br />
          <input type="date" id="toDate" v-model="toDate" required />
          <br />
        </div>
        <button @click="handleClick()" type="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import axios from "axios";

export default {
  name: "selectedProduct",
  components: {
    navbar,
  },
  data() {
    return {
      productInfo: {},
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address: "",
      fromDate: "",
      toDate: "",
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    async getProductById() {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_ROOT_API}/products/${this.$route.params.id}`
        );
        console.log(response.data);
        this.productInfo = response.data.product[0];
      } catch (err) {
        console.log(err);
      }
    },
    handleClick() {
      console.log(this.fromDate);
      const date1 = new Date(this.fromDate);
      const date2 = new Date(this.toDate);
      const today = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffDays);
      if (date2 < date1) {
        return alert("Duration is wrong");
      } else if (today >= date1 || today >= date2) {
        return alert("Dates should be greater than today");
      } else if (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.contact &&
        this.address &&
        this.fromDate &&
        this.toDate
      ) {
        let text = "Press Ok to confirm your order.";
        if (confirm(text) == true) {
          this.orderData = {
            email: this.email,
          };
          axios
            .post(
              `${process.env.VUE_APP_ROOT_API}/verification`,
              this.orderData
            )
            .then(
              (this.order = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                contact: this.contact,
                address: this.address,
                fromDate: this.fromDate,
                toDate: this.toDate,
                productId: this.productInfo._id,
                diffDays: diffDays,
              }),
              this.$router.push({
                name: "confirmOrder",
                params: this.order,
              })
            );
        } else {
          this.$router.push(`/`);
        }
      } else {
        alert("All field are required");
      }
    },
  },
};
</script>

<style scoped>
p {
  padding: 7px;
}
.div1 {
  padding: 10px;
  width: 50%;
  margin-left: 7px;
  float: left;
}

input {
  width: 400px;
  padding: 12px 20px;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 400px;
  background-color: #39393a;
  color: white;
  padding: 14px 20px;

  border: none;
  border-radius: 4px;
  cursor: pointer;
}
label {
  float: left;
  font-size: 16px;
}
.img1 {
  margin-left: 20%;
  height: 300px;
  width: 50%;
}

button:hover {
  background-color: #080808;
}
.product-info {
  float: left;
  border-style: ridge;
  width: 30%;
  height: 591px;
  padding: 5px;
  margin-top: 10px;
}
.user-detail {
  margin-top: 10px;
  border-style: ridge;
  float: left;
  width: 63%;
  height: 600px;
}
</style>
