<template>
  <div v-if="user" class="user">
    <h2>User Component</h2>
    <!-- <nav>
      <router-link to="/userprofile">User Profile</router-link>
      &nbsp;
      <router-link to="/otherprofiles">Other Profile</router-link>
    </nav> -->
    <h3>{{ user.name }}</h3>
    <ul>
      <li>Saved song</li>
      <li>Saved song</li>
      <li>Saved song</li>
    </ul>
    <router-view>
   
    </router-view>
  </div>
  <div v-else class="user">
    <p>Please <router-link to="/login">sign in</router-link> to view your profile</p>
  </div>
</template>

<script>
// import { getUser, getSavedSongs, getSavedSong } from '../services/api';

export default {
  data() {
    return {
      
      // savedsong: null
    };
  },
  props: ['user']
  // created() {
  //   getUser()
  //     .then(user => {
  //       this.user = user;
  //       // this.savesong = user.savedsong;
  //     });
  // }
};
</script>

<style>
.user {
  text-align: center;
}
</style>
