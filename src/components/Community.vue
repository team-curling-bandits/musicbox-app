<template>
  <div>
    <h2>MusicBox Community</h2>

    <ul v-if="users">
      <li 
        v-for="user in users"
        :key="user.id"
      >
        <router-link :to="`/community/${user.id}`">
        {{ user.name }}
        </router-link>
      </li>
    </ul>

    <router-view>
      :users="users"
    </router-view>
  </div>
</template>

<script>
import { getUsers } from '../services/api';

export default {
  data() {
    return {
      users: null
    };
  },
  created() {
    getUsers()
      .then(user => {
        this.users = user;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>
