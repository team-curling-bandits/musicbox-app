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
      <button @click="handleAdd" v-if="track">Add to profile</button>
    </div>
    <h2>Results:</h2>
    <ul class="results">
      <li 
        :key="music.id"
        v-for="music in musicList"
        @click="track = music"
      >
        <strong>{{ music.name }}</strong>
        {{ music.artistName }}
      </li>
    </ul>
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
      selected: null
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
        .then(alert(this.track.name + ' Saved!'));
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
