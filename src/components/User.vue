<template>
  <div v-if="user" class="user">
    <h2>Saved by {{ user.name }}</h2>
    <ul>
      <li :key="song.id" v-for="song in savedSongs"><strong>{{song.title}}</strong> by {{song.artist}}</li>

    </ul>
  </div>
  <div v-else class="user">
    <p>Please <router-link to="/login">sign in</router-link> to view your profile</p>
  </div>
</template>

<script>
import { getSavedSongs } from '../services/api';
export default {
  data() {
    return {
      savedSongs: null
    };
  },
  props: ['user'],
  created() {
    getSavedSongs(this.user.id) 
      .then(songs => {
        this.savedSongs = songs;
      });
  }
};
</script>

<style>
.user {
  text-align: center;
}
</style>
