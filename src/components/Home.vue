<template>
  <div>
    <h1>Music<span>Box</span></h1>
    <section>
    <p>Welcome to <strong> MusicBox! </strong>This site allows you to search and listen to your favorite music. </p><p><strong>Sign up</strong> to save your favorites into your own  profile page which you can edit anytime.  As an added bonus, you will be able to see other people's profiles and listen to their favorites.</p><p>We also included a <strong>News</strong> tab to get you 'in the know' of the happennings in the music world.</p>
    <p>Click <router-link to="/public"><strong>here</strong></router-link> to get started!</p>
    </section>
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

section {
  margin: auto;
  object-fit: contain;
  width:500px;
  text-align: center;
}

a {
  color: #09335b;
}
</style>
