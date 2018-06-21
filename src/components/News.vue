<template>
  <div>
    <h2>Muzak Nues</h2>
    <hr> 
    <div class="news-area">
      <div class="news-tile"
        v-for="article in newsList"
        :key="article.url"
      >
      <img :src="article.urlToImage">
      <a target="_blank" :href="article.url">{{ article.title }}</a>
      </div>
    </div>
    <p>Powered by <a target="_blank" href="https://newsapi.org">NewsAPI.org</a></p>
  </div>
</template>

<script>
import { getNews } from '../services/api';
export default {
  data() {
    return {
      newsList: null,
    };
  },
  methods: {
    handleNews() {
      getNews()
        .then(res => {
          this.newsList = res.articles;
        });
    }
  },
  created() {
    this.handleNews();
  }
};
</script>

<style scoped>
hr {
  width: 600px;
}
img {
  width: 100%;
  border-radius: 0px;
}
.news-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  height: 630px;
  overflow-y: auto;
  margin: auto;
}

.news-tile {
  width: 300px;
  font-family: 'Raleway', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bolder;

  margin-top: 10px;
  
}
</style>
