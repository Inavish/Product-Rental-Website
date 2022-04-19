<template>
  <div class="hello">
    <navbar />
    <carousel />
    <productList />
    <button class="open-button" @click="openForm()"></button>

    <div class="chat-popup" id="myForm">
      <div class="form-container">
        <div class="header">
          <h1>Chatbot</h1>
        </div>
        <chatbotPage />
        <button type="button" class="btn cancel" @click="closeForm()">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import carousel from "./carousel.vue";
import productList from "./productsList.vue";

import ChatbotPage from "./chatbotPage.vue";
export default {
  name: "indexPage",
  props: {},
  components: {
    navbar,
    carousel,
    productList,
    ChatbotPage,
  },
  methods: {
    openForm() {
      document.getElementById("myForm").style.display = "block";
    },
    closeForm() {
      document.getElementById("myForm").style.display = "none";
    },
  },
};
</script>

<style scoped>
h1 {
  padding: 8px;
}
.open-button {
  background-color: rgb(10, 10, 10);
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 1;
  position: fixed;
  bottom: 23px;
  background-image: url("../assets/chat.jpg");
  height: 100px;
  width: 100px;
  border-radius: 50%;
  right: 28px;
}
.header {
  background-color: black;
  color: #f1f1f1;
  margin-left: -7%;
  margin-right: -7%;
  margin-top: -14%;
}
.chat-popup {
  display: none;
  position: fixed;
  bottom: 0;
  height: 690px;
  right: 15px;
  border: 7px solid #070707;
  z-index: 9;
}

/* Add styles to the form container */
.form-container {
  background-color: rgb(234, 231, 231);
  max-width: 400px;
  height: 100%;
  padding: 20px;
  position: relative;
}

/* Full-width textarea */
.form-container textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  resize: none;
  min-height: 200px;
}

/* When the textarea gets focus, do something */
.form-container textarea:focus {
  background-color: #ddd;
  outline: none;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
</style>
