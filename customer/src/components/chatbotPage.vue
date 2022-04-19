<template>
  <div>
    <div>
      <div class="scrollbar" id="style-default">
        <div class="force-overflow">
          <div id="chatbox">
            <p class="botText">
              <span>Hello there! I am Fynd ChatBot</span>
            </p>
          </div>
        </div>
      </div>

      <div id="userInput">
        <input
          id="textInput"
          type="text"
          class="input3"
          v-model="msg"
          placeholder="Message"
        /><button class="btn" @click="getResponse()">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "chatbotPage",
  data() {
    return {
      msg: "",
      userInput: "",
    };
  },
  methods: {
    async getResponse() {
      let userDiv = document.createElement("span");
      userDiv.innerHTML = this.msg;
      userDiv.className = "user-input";
      document.getElementById("chatbox").append(userDiv);
      this.userInput = this.msg;
      this.msg = "";
      try {
        const userMsg = new FormData();
        userMsg.append("msg", this.userInput);
        const response = await axios.post(`http://127.0.0.1:5000/get`, userMsg);
        let botDiv = document.createElement("span");
        botDiv.innerHTML = `${response.data}`;
        botDiv.className = "bot-response";
        document.getElementById("chatbox").append(botDiv);
        window.scrollBy(0, -window.innerHeight);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.scrollbar {
  float: left;
  height: 400px;
  width: 400px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 450px;
}

.user-input {
  margin-bottom: 5px;
  display: inline-block;
  margin-top: 5px;
  background-color: rgb(191, 237, 121);
  text-align: right;
  padding: 10px;
  border-radius: 2px;
  display: block;
}
.btn {
  background-color: #2013b4;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.8;
  margin-bottom: 3px;
}
.input3 {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: ridge;
  background: #f1f1f1;
}
.bot-response {
  background-color: #bee3ff;
  padding: 10px;

  border-radius: 2px;
  display: block;
}

#textInput {
  width: 90%;
  border-radius: none;
  border: 3px solid black;
  border-radius: 20px;
  font-family: monospace;
  font-size: 17px;
}
.userText {
  color: black;
  font-family: monospace;
  font-size: 17px;
  text-align: right;
  line-height: 30px;
}

.botText {
  background-color: #bee3ff;
  padding: 10px;

  border-radius: 2px;
  display: block;
}
</style>
