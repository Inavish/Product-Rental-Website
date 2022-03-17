<template>
  <div>
    <div class="topnav">
      <a href="#home"
        ><img
          class="img1"
          src="https://assets.website-files.com/5f2bd20de11b965424e6cb83/60c2f7ee3d33e2e05090942d_Fynd.png"
          alt="logo"
      /></a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div class="search-container">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i class="fa fa-search">Search</i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBarPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  margin-top: -7px;
  margin-left: -7px;
  overflow: hidden;
  background-color: #e9e9e9;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav .search-container {
  float: right;
}

.topnav input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}
.img1 {
  height: 23px;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a,
  .topnav input[type="text"],
  .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}
</style>
