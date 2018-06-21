<template>
  <div>
    <h2>Community Page Component</h2>

    <h3></h3>
    <audio controls v-if="track" :src="track.url"></audio>
    <ul>
      <li 
        :key="song.id" 
        v-for="song in savedSongs"
        @click="track = song"
        >
        {{song.title}}
        </li>
    </ul>
  </div>
</template>

<script>
import { getSavedSongs } from '../services/api';
export default {
  data() {
    return {
      savedSongs: null,
      track: ''
    };
  },
  created() {
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
