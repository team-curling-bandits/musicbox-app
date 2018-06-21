<template>
  <div>
    <h2>Community Page Component</h2>

    <h3>Songs saved by {{ user.name }}</h3>
    <div>
      <h3>{{ track.title }}</h3>
      <h3>{{ track.artist }}</h3>
      <audio controls v-if="track" :src="track.url"></audio>
    </div>
    <ul>
      <li 
        :key="song.id" 
        v-for="song in savedSongs"
        @click="track = song"
        >
        <strong>{{song.title}}</strong> by {{ song.artist }}
        </li>
    </ul>
  </div> 
</template>

<script>
import { getSavedSongs, getUser } from '../services/api';
export default {
  data() {
    return {
      savedSongs: null,
      track: '',
      user: null
    };
  },
  created() {
    getUser(this.$route.params.id)
      .then(user => {
        this.user = user;
      })
      .catch(err => {
        this.error = err;
      }),
    getSavedSongs(this.$route.params.id)
      .then(songs => {
        this.savedSongs = songs;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>
