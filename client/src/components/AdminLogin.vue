<template>
  <div class="hello">
    <h2>Login Form</h2>

    <div class="imgcontainer">
      <img src="../assets/user-log0.jpg" alt="Avatar" class="avatar" />
    </div>

    <div class="container">
      <label for="uname"><b>Email</b></label>

      <input type="text" v-model="email" placeholder="Enter Email" required />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        v-model="password"
        required
      />

      <button @click="user_login()" type="submit">Login</button>
    </div>

    <div class="container" style="background-color: #f1f1f1">
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async user_login() {
      try {
        await axios
          .post(`http://localhost:5000/users/login`, {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            console.log(response);
            this.$router.push(`/allProducts`);
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  border: 3px solid #f1f1f1;
  width: 50%;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.imgcontainer {
  text-align: center;
  padding-left: 40%;
  margin: 24px 0 12px 0;
  width: 30%;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
