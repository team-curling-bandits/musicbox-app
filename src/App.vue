<template>
  <div id="app">
    <h1>Music Box</h1>
    <nav>
    <router-link to="/" class="nav">Home</router-link> 
    <router-link to="/about" class="nav">About Us</router-link>
    <router-link to="/public" class="nav">Public Page</router-link>
    <router-link to="/user" class="nav">Users Page</router-link>
    <router-link to="/community" class="nav">Community</router-link>
    <router-link to="/news" class="nav">News</router-link>
    <router-link v-if="!user" to="/login" class="nav">Sign In</router-link>
      <a v-else @click.prevent="handleLogout">Logout</a>
    </nav>
    <pre>{{user}}</pre>
    <hr>

    <router-view :on-user="handleUser"
    :user="user"
    ></router-view>

  </div>
</template>

<script>

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    const raw = localStorage.user;
    if(raw) {
      try {
        this.user = JSON.parse(raw);
      }
      catch (err) {
        localStorage.removeItem('user');
      }
    }
  },
  methods: {
    handleUser(user) {
      this.user = user;
      localStorage.user = JSON.stringify(user);
    },
    handleLogout() {
      localStorage.removeItem('user');
      this.user = null;
    }
  }
  
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
