<template>
  <div id="app">
    <nav>
    <router-link to="/" class="nav" id="home">Home</router-link> 
    <router-link to="/about" class="nav">About Us</router-link>
    <router-link to="/public" class="nav">Public Page</router-link>
    <router-link to="/user" class="nav">Users Page</router-link>
    <router-link to="/community" class="nav">Community</router-link>
    <router-link to="/news" class="nav">News</router-link>
    <router-link v-if="!user" to="/login" class="nav">Sign In</router-link>
      <a v-else @click.prevent="handleLogout">Logout</a>
    </nav>
    <!-- <h1>Music<span>Box</span></h1> -->
    <!-- <pre>{{user}}</pre> -->

    <router-view :on-user="handleUser"
    :user="user"
    ></router-view>

  </div>
</template>

<script>

export default {
  data() {
    return {
      backgroundImage: '../images/bg-musicbox.jpg',
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
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  /* border: 2px solid black; */
}

h1 {
  margin-top: 60px;
}

span {
  border: 4px solid #2c3e50;
  padding-left: 2px;
  padding-right: 2px;
  margin: 2px;
}

.nav {
  margin: 10px;
}

a {
  height: 25px;
  padding: 7px;
  color: #2c3e50;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.router-link-active {
  color: white;
}

#home {
  color: #2c3e50;
}

</style>
