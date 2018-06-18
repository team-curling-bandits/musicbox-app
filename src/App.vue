<template>
  <div id="app">
    <h1>Music Box</h1>
    <nav>
    <router-link to="/" class="nav">Home</router-link> 
    <router-link to="/about" class="nav">About Us</router-link>
    <router-link to="/public" class="nav">Public Page</router-link>
    <router-link to="/user" class="nav">User Page</router-link>
    <router-link to="/news" class="nav">News</router-link>
    <router-link to="/login" class="nav">Login / SignUp</router-link>
    </nav>
    <hr>

    <router-view></router-view>

  </div>
</template>

<script>


export default {
  
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 2px solid black;
}
.nav {
  margin: 10px;
}

</style>
