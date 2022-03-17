<template>
  <div class="one">
    <div class="two">
      <div id="logo">
        <img
          class="img1"
          src="https://assets.website-files.com/5f2bd20de11b965424e6cb83/60c2f7ee3d33e2e05090942d_Fynd.png"
          alt="logo"
        />
      </div>
      <div id="link1">
        <br />
        <ul>
          <li class="navLink">
            <router-link to="/allProducts">All Products</router-link>
          </li>
          <li class="navLink">
            <router-link to="/addProducts">Add Products</router-link>
          </li>
          <li class="navLink">
            <router-link to="/allOrders">All Orders</router-link>
          </li>
          <li class="navLink">Search</li>
        </ul>
      </div>
    </div>
    <div class="content" align="center">
      <div class="topbar">
        <h2>Dashboard</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
}

.one {
  display: flex;
  position: relative;
}

.one .two {
  width: 225px;
  height: 100%;
  background: black;
  padding: 30px 0px;
  position: fixed;
  margin-top: -8px;
  margin-left: -8px;
}
#main-container {
  margin-top: 5%;
}
.one .two h1 {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  font-style: oblique;
  font-weight: bold;
}

.one .two ul li {
  text-align: center;
  padding: 15px;

  border-bottom: 0.1px solid white;
  border-top: 0.1px solid white;
}

.one .two ul li a {
  color: #ffffff;
  display: block;
}
.navLink {
  color: white;
  cursor: pointer;
}

.one .two ul li a .side {
  width: 25px;
  align-items: center;
}

.one .content {
  width: 100%;
  margin-left: 200px;
}

.one .content .topbar {
  text-align: center;
  padding: 20px;
  background: Black;
  color: white;
  position: fixed;
  width: 90%;
  margin-top: -8px;
}

.one .content .contentbar {
  margin: auto;
}

.one .content .contentbar h1 {
  color: Black;
  text-align: center;
  font-style: oblique;
  font-weight: bold;
}
.img1 {
  width: 80%;
  height: 90px;
}
#logo {
  display: flex;
  justify-content: space-around;
  padding: 10%;
}
#link {
  float: inline-start;
}
</style>
//
<!DOCTYPE html>
//
<html>
  //
  <head>
    //
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //
    <style>
      // body {
      //   margin: 0;
      //   font-family: "Lato", sans-serif;
      // }

      // .sidebar {
      //   margin: 0;
      //   padding: 0;
      //   width: 200px;
      //   background-color: #f1f1f1;
      //   position: fixed;
      //   height: 100%;
      //   overflow: auto;
      // }

      // .sidebar a {
      //   display: block;
      //   color: black;
      //   padding: 16px;
      //   text-decoration: none;
      // }

      // .sidebar a.active {
      //   background-color: #04AA6D;
      //   color: white;
      // }

      // .sidebar a:hover:not(.active) {
      //   background-color: #555;
      //   color: white;
      // }

      // div.content {
      //   margin-left: 200px;
      //   padding: 1px 16px;
      //   height: 1000px;
      // }

      // @media screen and (max-width: 700px) {
      //   .sidebar {
      //     width: 100%;
      //     height: auto;
      //     position: relative;
      //   }
      //   .sidebar a {float: left;}
      //   div.content {margin-left: 0;}
      // }

      // @media screen and (max-width: 400px) {
      //   .sidebar a {
      //     text-align: center;
      //     float: none;
      //   }
      // }
      //
    </style>
    //
  </head>
  //
  <body>
    //
    <div class="sidebar">
      // <a class="active" href="#home">Home</a> // <a href="#news">News</a> //
      <a href="#contact">Contact</a> // <a href="#about">About</a> //
    </div>

    //
    <div class="content">
      //
      <h2>Responsive Sidebar Example</h2>
      //
      <p>
        This example use media queries to transform the sidebar to a top
        navigation bar when the screen size is 700px or less.
      </p>
      //
      <p>
        We have also added a media query for screens that are 400px or less,
        which will vertically stack and center the navigation links.
      </p>
      //
      <h3>Resize the browser window to see the effect.</h3>
      //
    </div>

    //
  </body>
  //
</html>
