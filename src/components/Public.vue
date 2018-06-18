<template>
  <div>
    <h1>Public page</h1>
    <div class="music-player">
      <h2>Song: Say It Ain't So</h2>
      <h3>Artist: Weezer</h3>
      <h3>Album: Weezer (Blue Album)(Deluxe Edition)</h3>
      <audio controls>
        <!--example song, soon to be dynamic-->
        <source src="http://listen.vo.llnwd.net/g2/4/2/4/9/8/911189424.mp3">
      </audio>
    </div>
  </div>
</template>

<script>
import { getMusic } from '../services/api';

export default {
  data() {
    return {
      musiclist: null
    };
  },
  created() {
    getMusic()
      .then(musiclist => {
        this.musiclist = musiclist;
      })
      .catch(console.log('error'));
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
