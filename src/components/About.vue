<template>
  <div class="team-div">
    <h1>About Us</h1>
    <section class="bio-body">
      <img src="https://avatars0.githubusercontent.com/u/35393465?s=400&u=e9efbc50f09f7bfe576b1d947ea9864badb5d344&v=4" alt="profile picture">
      <section class="bio-column">
        <h3>Mariah Adams</h3>
        <p>As a member of the Curling Bandits, Mariah wipes the curling sheet with the competition.
          She can guide the stone into the house center with her eyes closed. Outside of her life's work, which is
          curling, she enjoys video games, watching movies, and golfing.
        </p>
      </section>
    </section>
    <section class="bio-body">
      <img src="https://media.licdn.com/dms/image/C5603AQHOr-IN5NcObA/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=ggLQRjaxvtyePoyeJf-rlgbHBLzwQWMuMuH25jG4lNY" alt="profile picture">
      <section class="bio-column">
        <h3>Chris Golden</h3>
        <p>A literal chessmaster on the ice, Chris uses his extreme skills with the curling broom to
          sweep away all competition. When not engaging in the love of his life, which is curling, he
          enjoys climbing, biking, and video games.
        </p>
      </section>
    </section>
    <section class="bio-body">
      <img src="https://avatars2.githubusercontent.com/u/38193198?s=400&v=4" alt="profile picture">
      <section class="bio-column">
        <h3>Carmen Ramos</h3>
        <p>Carmen is responsible for taking the Curlng Bandits from good to great. Whether she's throwing a guard, draw, or
          takeout, she always hits her mark. When she's not playing "the Roaring Game", which is curling, she can be 
          found cooking, programming, and drying fruit.
        </p>
      </section>
    </section>
    <section class="bio-body">
      <img src="https://media.licdn.com/dms/image/C4E03AQGcC2fKtU6TLQ/profile-displayphoto-shrink_800_800/0?e=1534982400&v=beta&t=4QLOU0ShZ7nb4zg4V26m_5DGCrvfG0Y6H0iaYfvFn4o" alt="profile picture">
      <section class="bio-column">
        <h3>Injoong Yoon</h3>
        <p>For Injoong, curling isn't just a game; it's a way of life. He lives, breathes, and eats curling,
          every single day, and still can't get enough of it. When not reveling in the greatest sport in the world,
          which is curling, he enjoys cooking, writing, and playing games.
        </p>
      </section>
    </section>
    <div class="logo">
      <img src="../../images/logo-curling-bandits.png" alt="curling bandits logo">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.team-div {
  /* margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  padding: 50px;
}

.bio-body {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
  text-align: left;
  width: 80%;
  margin-top: 40px;
  margin-bottom: 40px;
}

.bio-column {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

h3 {
  margin-bottom: 0;
}

img {
  object-fit: contain;
  width: 150px;
  border-radius: 100px;
  margin-right: 25px;
}

h3, img {
  align-content: center;
}

p {
  margin-top: 10px;
}
</style>
