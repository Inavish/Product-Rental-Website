<template>
  <div>
    <navbar />
    <div class="Container">
      <div class="box1">
        <img v-bind:src="productInfo.ProductImage" class="img1" alt="Image" />
        <p>Product Name: {{ productInfo.ProductName }}</p>
        <p>Product Price: {{ productInfo.ProductPrice }} Rs/day</p>
        <p>Product Color: {{ productInfo.ProductColor }}</p>
        <p>Product Category: {{ productInfo.ProductCategory }}</p>
      </div>
      <div class="box2">
        <h1>Your Details</h1>
        <p>Name: {{ userInfo.firstName }} {{ userInfo.lastName }}</p>
        <p>Email: {{ userInfo.email }}</p>
        <p>Contact: {{ userInfo.contact }}</p>
        <p>Address: {{ userInfo.address }}</p>
        <p>From Date: {{ userInfo.fromDate }}</p>
        <p>To Date: {{ userInfo.toDate }}</p>
        <p>Total days: {{ userInfo.diffDays }} Days</p>
        <p>
          Total Prize: {{ this.totalPrize }} Rs for {{ userInfo.diffDays }} Days
        </p>

        <h3>Enter The Otp</h3>

        <input
          type="text"
          id="otp"
          v-model="otp"
          placeholder="Enter Otp.."
          required
        /><button @click="verifyOtp">Submit</button>
      </div>
    </div>
    <div class="userInfo"></div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    navbar,
  },
  data() {
    return {
      productInfo: {},
      totalPrize: "",
      otp: "",
    };
  },
  created: function () {
    this.confirmOrder();
  },
  methods: {
    async confirmOrder() {
      this.userInfo = this.$route.params;
      console.log(this.userInfo);
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_ROOT_API}/products/${this.userInfo.productId}`
        );
        console.log(response.data);
        this.productInfo = response.data.product[0];
        this.totalPrize =
          parseInt(this.userInfo.diffDays) * this.productInfo.ProductPrice;
        console.log(this.totalPrize);
      } catch (err) {
        console.log(err);
      }
    },
    async verifyOtp() {
      this.otpVerification = {
        otp: this.otp,
      };
      axios
        .post(
          `${process.env.VUE_APP_ROOT_API}/verification/verifyOtp`,
          this.otpVerification
        )
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            this.orderInfo = {
              firstName: this.userInfo.firstName,
              lastName: this.userInfo.lastName,
              email: this.userInfo.email,
              contact: this.userInfo.contact,
              address: this.userInfo.address,
              fromDate: this.userInfo.fromDate,
              toDate: this.userInfo.toDate,
              totalDays: this.userInfo.diffDays,
              totalPrize: this.totalPrize,
              productId: this.userInfo.productId,
            };
            console.log(this.orderInfo);
            axios
              .post(`${process.env.VUE_APP_ROOT_API}/order`, this.orderInfo)
              .then((res) => {
                console.log(res.data);
                alert(
                  "Your Oder was successful, Receipt has been sent to your email."
                );
                axios.post(
                  `${process.env.VUE_APP_ROOT_API}/verification/receipt`,
                  this.orderInfo
                );
                this.$router.push(`/`);
              });
          } else {
            alert("OTP was incorrect, please enter correct otp");
          }
        })
        .catch((err) => {
          //Error in any part of execution will be handled in this and create response
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.box1 {
  border-style: ridge;
  float: left;
  width: 40%;
  padding: 10px;
  height: 700px;
}
.container {
  height: 100%;
}
.box2 {
  height: 700px;
  padding: 10px;
  border-style: ridge;
  float: left;
  width: 50%;
}
input {
  width: 400px;
  padding: 12px 20px;
  display: flex;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 10px;
}

button {
  width: 400px;
  background-color: #39393a;
  color: white;
  padding: 14px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.img1 {
  height: 320px;
  width: 60%;
}
@media screen and (max-width: 400px) {
  .box1 {
    float: none;
    margin-right: 0;
    width: auto;
    border: 0;
    border-bottom: 2px solid #000;
  }
}
</style>
