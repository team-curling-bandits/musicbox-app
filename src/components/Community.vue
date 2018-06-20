<template>
  <div>
    <h2>Community Component</h2>

    <ul v-if="users">
      <li 
        v-for="user in users"
        :key="user.id"
      >
        {{ user.id }}
      </li>
    </ul>
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
      });
  }
};
</script>

<style>

</style>
