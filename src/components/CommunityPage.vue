<template>
  <div>
    <h3 v-if="user">Songs saved by {{ user.name }}</h3>
    <div class="player">
      <div v-if="track" class="music-info">
        <h3>Now Playing: </h3>
        <ul class="info-list">
          <li><b>Title:</b> {{ track.title }}</li>
          <li><b>Artist:</b> {{ track.artist }}</li>
        </ul>
      </div>
      <audio controls v-if="track" :src="track.url"></audio>
    </div>
    <section class="community-page">
      <ul class="community-list">
        <li 
          :key="song.id" 
          v-for="song in savedSongs"
          @click="track = song"
          >
          <strong>{{song.title}}</strong> by {{ song.artist }}
          </li>
      </ul>
    </section>
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
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
  margin: auto;
}

.community-page {
  object-fit: contain;
  width: 300px;
  margin: auto;
  margin-bottom: 10px;
  text-align: left;
  padding: 20px 10px 20px 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.community-list {
  padding-left: 10px;
}

.music-info {
  margin-bottom: 14px;
  text-align: left;
}

.music-info h3 {
  text-align: center;
}

.info-list {
  line-height: 20px;
  margin-top: 4px;
  width: 400px;
  align-items: center;
}

.player {
  margin-bottom: 20px; 
}
</style>
