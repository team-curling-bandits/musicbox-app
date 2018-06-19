<template>
  <div v-if="songs !== null" class="user">
    <h2>User Component</h2>
    <nav>
      <router-link to="/userprofile">User Profile</router-link>
      &nbsp;
      <router-link to="/otherprofiles">Other Profile</router-link>
    </nav>
    <h3>User Profile</h3>
    <ul>
      <li>Saved song</li>
      <li>Saved song</li>
      <li>Saved song</li>
    </ul>
    <router-view>
   
    </router-view>
  </div>
</template>

<script>
import { getSongs } from '../services/api';

export default {
  data() {
    return {
      songs: null
    };
  },
  created() {
    getSongs(this.$route.params.id)
      .then(song => {
        this.song = song;
      });
  }
};
</script>

<style>
.user {
  text-align: center;
}
</style>
