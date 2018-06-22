<template>
  <div v-if="user" class="user">
    <h2>Saved by {{ user.name }}</h2>
    <div class="music-player">
      <div v-if="track" class="music-info">
        <h3>Now Playing: </h3>
        <ul class="info-list">
          <li><b>Title:</b> {{ track.title }}</li>
          <li><b>Artist:</b> {{ track.artist }}</li>
        </ul>
      </div>
    
      <audio controls v-if="track" :src="track.url"></audio>
      <button @click="handleDelete" v-if="track">Delete Song from list</button>
    </div>
    <div class="saved-songs" v-if="savedSongs">
      <li 
        :key="song.id" 
        v-for="song in savedSongs"
        @click="track = song"
      >
        <strong>{{song.title}}</strong> by {{song.artist}}
      </li>
      <h3 id="conditional-prompt" v-if="savedSongs.length === 0 || savedSongs === null">Add some songs!</h3>
    </div>
  </div>
  <div v-else class="user">
    <p>Please <router-link to="/login">sign in</router-link> to view your profile</p>
  </div>
</template>

<script>
import { getSavedSongs, deleteSong } from '../services/api';
export default {
  data() {
    return {
      savedSongs: null,
      track: ''
    };
  },
  props: ['user'],
  created() {
    if(this.user) {
      getSavedSongs(this.user.id) 
        .then(songs => {
          this.savedSongs = songs;
        });
    }
  },
  methods: {
    handleDelete() {
      if(confirm('Are you sure you want to delete?')) {
        deleteSong(this.track.id)
          .then(res => {
            if(res.removed) {
              this.track = '';
              getSavedSongs(this.user.id)
                .then(songs => {
                  this.savedSongs = songs;
                });
            }
          })
          .catch(err => {
            this.error = err;
          });
      }
      
    }
  }
};
</script>

<style scoped>
.user {
  text-align: center;
}

.saved-songs {
  object-fit: contain;
  width: 350px;
  margin: auto;
  margin-bottom: 10px;
  text-align: left;
  font-size: 1.2em;
  padding: 20px 0px 20px 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

a {
  color: white;
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
li {
  
  list-style: none;
  text-align: start;
}
.music-info h3 {
  text-align: center;
}

.info-list {
  line-height: 20px;
  margin-top: 4px;
}

.music-player {
  margin-bottom: 20px; 
}

#conditional-prompt {
  text-align: center;
}
</style>
