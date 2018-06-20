<template>
  <div>
    <h1>Public page</h1>
    <form class="search" @submit.prevent="handleSubmit">
      <input type="text" v-model="song">
      <button
        type="submit">submit</button>
    </form>
    <div class="music-player">
      <h2>{{ track.name }}</h2>
      <h3>{{ track.artistName }}</h3>
      <h5>{{ track.albumName }}</h5>
      <audio controls v-if="track" :src="track.previewURL"></audio>
      <button @click="handleAdd" v-if="track">Add to profile</button>
    </div>
    <h2>Results:</h2>
    <ul>
      <li 
        :key="music.id"
        v-for="music in musicList"
        @click="track = music"
      >
        <strong>{{ music.name }}</strong>
        {{ music.artistName }}
        {{ music.id }}
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
      // console.log(this.track.id);
      // console.log(this.user.id);
      track.userId = this.user.id;
      track.id = this.track.id;
      return saveSong(track)
        .then(alert(this.track.name + ' Saved!'));
    }
  }
};
</script>

<style>
.music-player {
  margin: auto;
  width: 300px;
  max-height: 300px;
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
li:hover {
  cursor: pointer;
  background-color: rgba(211, 211, 211, 0.637)
}
</style>
