<template>
  <div>
    <h2>MusicBox Community</h2>

    <ul class="user-tile-area" v-if="users">
      <li
        v-for="user in users"
        :key="user.id"
      >
        <router-link
        class="user-tile"  
         :to="`/community/${user.id}`">
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
h2 {
  font-size: 40px;
}

.user-tile-area {
  width: 600px;
}

.user-tile {
  font-size: 30px;
}
</style>
