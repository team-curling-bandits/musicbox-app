<template>
  <div v-if="user" class="user">
    <h2>User Component</h2>
    <h3>{{ user.name }}</h3>
    <ul>
      <li>Saved song</li>
      <li>Saved song</li>
      <li>Saved song</li>
    </ul>
    <router-view></router-view>
  </div>
  <div v-else class="user">
    <p>Please <router-link to="/login">sign in</router-link> to view your profile</p>
  </div>
</template>

<script>

export default {
  props: ['user']
};
</script>

<style scoped>
.user {
  text-align: center;
}

a {
  color: white;
}
</style>
