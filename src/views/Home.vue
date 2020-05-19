<template>
  <div class="home page">
    <div class="animate__animated animate__fadeInLeft">
      <h1>{{randomJoke}}</h1>
      <p>{{randomPunchline}}</p>
      <input type="button" @click="fetchJoke" value="Get a nice joke, while chilling" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// Skapa component till animate
export default {
  name: "Home",
  created() {},
  data() {
    return {
      randomJoke: "Väntar på att du ska trycka på knappjäveln",
      randomPunchline: " "
    };
  },
  methods: {
    fetchJoke() {
      fetch("https://official-joke-api.appspot.com/jokes/random", {
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          this.randomJoke = result.setup;
          this.randomPunchline = result.punchline;
          console.log(result.setup);
        });
    }
  },
  components: {
    HelloWorld
  }
};
</script>
