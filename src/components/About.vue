<template>
  <div class="team-div">
    <h1>About Us</h1>
    <div class="team-cb">
      <h3>Mariah Adams</h3>
      <!-- <img src="" alt=""> -->
      <p>As a member of the Curling Bandits, Mariah wipes the curling sheet with the competition.
        She can guide the stone into the house center with her eyes closed. Outside of her life's work, which is
        curling, she enjoys video games, watching movies, and golfing.
      </p>
    </div>
    <div class="team-cb">
      <h3>Chris Golden</h3>
      <!-- <img src="" alt=""> -->
      <p>A literal chessmaster on the ice, Chris uses his extreme skills with the curling broom to
        sweep away all competition. When not engaging in the love of his life, which is curling, he
        enjoys climbing, biking, and video games.
      </p>
    </div>
    <div class="team-cb">
      <h3>Carmen Ramos</h3>
      <!-- <img src="" alt=""> -->
      <p>Carmen is responsible for taking the Curlng Bandits from good to great. Whether she's throwing a guard, draw, or
        takeout, she always hits her mark. When she's not playing "the Roaring Game", which is curling, she can be 
        found walking, programming, and drying fruit.
      </p>
    </div>
    <div class="team-cb">
      <h3>Injoong Yoon</h3>
      <!-- <img src="" alt=""> -->
      <p>For Injoong, curling isn't just a game; it's a way of life. He lives, breathes, and eats curling,
        every single day, and still can't get enough of it. When not reveling in the greatest sport in the world,
        which is curling, he enjoys cooking, writing, and playing games.
      </p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.team-div {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
}

.team-cb {
  display: flex;
  /* justify-content: flex-start; */
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  text-align: left;
  width: 80%;
}

h3 {
  margin-bottom: 0;
}

p {
  margin-top: 10px;
}
</style>
