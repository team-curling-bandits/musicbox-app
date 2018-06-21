<template>
  <div>
    <h2>Muzak Nues</h2>
    <hr> 
    <ul>
      <li
        v-for="article in newsList"
        :key="article.url"
      >
      <a target="_blank" :href="article.url">{{ article.title }}</a>
      <img :src="article.urlToImage">
      </li>
    </ul>
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
    },
    handleNewsLink() {

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
  width: 150px;
}
</style>
