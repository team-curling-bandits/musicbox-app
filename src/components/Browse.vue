<template>
  <div>
    <h1>Search for songs:</h1>
    <form class="search" @submit.prevent="handleSubmit">
      <input type="text" v-model="song" placeholder="search for songs, albums, or artists">
      <button
        type="submit">search</button>
    </form>
    <div class="music-player">

      <div v-if="track" class="music-info">
      <h3>Now Playing: </h3>
        <ul class="info-list">
          <li><b>Title:</b> {{ track.name }}</li>
          <li><b>Artist:</b> {{ track.artistName }}</li>
          <li><b>Album:</b> {{ track.albumName }}</li>
        </ul>
      </div>
      
      <audio controls v-if="track" :src="track.previewURL"></audio>
      <button :disabled="isDisabled" @click="handleAdd" v-if="track">Add to profile</button>
    </div>
    <h2 v-if="musicList">Results:</h2>
    <section>
      <ul class="results">
        <li 
          :key="music.id"
          v-for="music in musicList"
          @click="track = music, isDisabled = false"
        >
          <strong>{{ music.name }}</strong>
          by {{ music.artistName }} 
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { searchSong, saveSong } from '../services/api';

export default {
  data() {
    return {
      musicList: null,
      song: '',
      track: '',
      isDisabled: false
    };
  },
  props: ['user'],
  methods: {
    handleSubmit() {
      searchSong(this.song)
        .then(res => {
          this.musicList = res.search.data.tracks;
        });
    },
    handleAdd(track) {
      track.userId = this.user.id;
      track.id = this.track.id;
      track.artist = this.track.artistName;
      track.title = this.track.name;
      track.url = this.track.previewURL;

      return saveSong(track)
        .then(alert(this.track.name + ' Saved!', this.isDisabled = true));
    }
  }
};
</script>

<style>
.music-player {
  margin: auto;
  width: 350px;
  max-height: 300px;
}

input {
  width: 200px;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
  margin: auto;
}

section {
  object-fit: contain;
  width: 500px;
  margin: auto;
  margin-bottom: 10px;
  text-align: left;
  font-size: 1.2em;
  padding: 20px 10px 20px 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
}

li:hover {
  cursor: pointer;
  background-color: rgba(211, 211, 211, 0.637)
}
</style>
