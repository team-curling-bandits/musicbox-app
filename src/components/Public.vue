<template>
  <div>
    <h1>Public page</h1>
    <form class="search" @submit.prevent="handleSubmit">
      <input type="text" name="artist" v-model="artist">
      <button
        type="submit">submit</button>
    </form>
    <div class="music-player">
      <h2>Song: Say It Ain't So</h2>
      <h3>Artist: Weezer</h3>
      <h3>Album: Weezer (Blue Album)(Deluxe Edition)</h3>
      <audio controls>
        <!--example song, soon to be dynamic-->
        <source src="http://listen.vo.llnwd.net/g2/4/2/4/9/8/911189424.mp3">
      </audio>
    </div>
    <ul>
      <li 
      :key="music.id"
      v-for="music in musicList">{{ music.name }}</li>
    </ul>
  </div>
</template>

<script>
import { getMusic, searchArtist } from '../services/api';

export default {
  data() {
    return {
      musicList: null,
      artist: ''
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
      console.log(this.artist);
      searchArtist(this.artist)
        .then(res => {
          this.musicList = res.search.data.artists;
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
</style>
