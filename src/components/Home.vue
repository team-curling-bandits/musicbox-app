<template>
  <div>
    <h1>Music<span>Box</span></h1>
    <section>
    <p>Welcome to <strong> MusicBox! </strong>This site allows you to search and listen to your favorite music. </p><p><router-link to="/login" class="nav"><strong>Sign up</strong></router-link> to save your favorites into your own  profile page which you can edit anytime.  As an added bonus, you will be able to see other people's profiles and listen to their favorites.</p><p>We also included a <router-link to="/news" class="nav"><strong>News</strong></router-link> tab to get you 'in the know' of the happennings in the music world.</p>
    <p>Click <router-link to="/browse" class="nav"><strong>HERE</strong></router-link> to get started!</p>
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

section {
  object-fit: contain;
  width: 500px;
  margin: auto;
  margin-bottom: 10px;
  text-align: left;
  font-size: 1.2em;
  padding: 20px 20px 20px 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

a {
  color: #2c3e50;
  margin: 0px;
}

a.nav {
  padding: 2px;
}
</style>
