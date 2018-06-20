<template>
  <div>
    <h2>Community Page Component</h2>

    <h3>{{ user.name }}</h3>
    <ul>
      <li>Saved song</li>
      <li>Saved song</li>
      <li>Saved song</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['user']
};
</script>

<style>

</style>
