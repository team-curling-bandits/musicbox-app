<template>
  <div>
    <h1>Music<span>Box</span></h1>
    <p>Welcome to MusicBox! Please excuse our pixie dust...</p>
    <p>Click <router-link to="/public">here</router-link> to get started!</p>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
h1 {
  margin-top: 80px;
  font-size: 6em;
}

span {
  border: 6px solid #2c3e50;
  padding-left: 4px;
  padding-right: 8px;
  margin: 5px;
}

a {
  color: #09335b;
}
</style>
