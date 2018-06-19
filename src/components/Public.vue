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
      <h3>{{ track.albumName }}</h3>
      <audio controls v-if="track" :src="track.previewURL">
      </audio>
    </div>
    <ul>
      <li 
        :key="music.id"
        v-for="music in musicList"
        @click="track = music"
      >
      <strong>{{ music.name }}</strong> by {{ music.artistName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getMusic, searchSong } from '../services/api';

export default {
  data() {
    return {
      musicList: null,
      song: '',
      track: ''
    };
  },
  created() {
    getMusic()
      .then(musiclist => {
        this.musiclist = musiclist;
      })
      .catch(console.log('error'));
  },
  methods: {
    handleSubmit() {
      console.log(this.song);
      searchSong(this.song)
        .then(res => {
          this.musicList = res.search.data.tracks;
        });
    }
  }
};
</script>

<style>
.music-player {
  margin: auto;
  width: 300px;
  height: 300px;
}

li {
  list-style-type: none;
}
</style>
