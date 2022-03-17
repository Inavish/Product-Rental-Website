<template>
  <div>
    <form>
      <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
      <input type="radio" name="fancy" value="hearts" id="hearts" />
      <input type="radio" name="fancy" value="spades" id="spades" />
      <input type="radio" name="fancy" value="diamonds" id="diamonds" />
      <label for="clubs"
        ><img class="img1" src="../assets/c1.jpeg" alt="logo" /></label
      ><label for="hearts"
        ><img class="img1" src="../assets/c2.jpeg" alt="logo" /></label
      ><label for="spades"
        ><img class="img1" src="../assets/c3.jpg" alt="logo" /> </label
      ><label for="diamonds"
        ><img class="img1" src="../assets/c3.jpg" alt="logo"
      /></label>
    </form>
  </div>
</template>

<script>
export default {
  name: "carouselPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.img1 {
  height: 30vw;
  width: 90vw;
}
body {
  font-family: sans-serif;
  overflow: hidden;
}

label {
  background: #444;
  color: #fff;
  transition: transform 400ms ease-out;
  display: inline-block;
  min-height: 100%;
  width: 100vw;
  height: 70vh;
  position: relative;
  z-index: 1;
  text-align: center;
  line-height: 100vh;
}

form {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  white-space: nowrap;
}
input {
  position: absolute;
}

input:nth-of-type(1):checked ~ label:nth-of-type(1),
input:nth-of-type(2):checked ~ label:nth-of-type(2),
input:nth-of-type(3):checked ~ label:nth-of-type(3),
input:nth-of-type(4):checked ~ label:nth-of-type(4) {
  z-index: 0;
}

input:nth-of-type(1):checked ~ label {
  transform: translate3d(0, 0, 0);
}

input:nth-of-type(2):checked ~ label {
  transform: translate3d(-100%, 0, 0);
}

input:nth-of-type(3):checked ~ label {
  transform: translate3d(-200%, 0, 0);
}

input:nth-of-type(4):checked ~ label {
  transform: translate3d(-300%, 0, 0);
}

label {
  background: white;
  background-size: cover;
  font-size: 3rem;
}

label[for="diamonds"],
label[for="hearts"] {
  background: white;
}

label:before,
label:after {
  color: rgb(19, 14, 14);
  display: block;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  padding: 1rem;
  font-size: 3rem;
  height: 10rem;

  line-height: 10rem;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  cursor: pointer;
}

label:before {
  content: "\276D";
  right: 100%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
}

label:after {
  content: "\276C";
  left: 100%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
</style>
