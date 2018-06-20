<template>
  <div>
    <h2>Muzak Nues</h2>
    <hr> 
    <ul>
      <li
        v-for="article in newsList"
        :key="article.url"
        @click="handleNewsLink"
      >
      {{ article.title }}
      </li>
    </ul>
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
</style>
