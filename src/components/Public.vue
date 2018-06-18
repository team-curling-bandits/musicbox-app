<template>
  <h1>Public page</h1>
</template>

<script>
import { getMusic } from '../service/api';

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

</style>
