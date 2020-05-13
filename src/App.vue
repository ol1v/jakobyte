<template>
  <div id="app">
    <section id="mainsection">
      <div id="nav">
        <h1 id="jakobyte">JAKOBYTE.SE</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>

      <router-view />
    </section>

    <section id="servicesection">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe veritatis
        sunt repellat voluptates, tenetur consequatur perspiciatis doloribus
        possimus omnis magnam facere in ipsa fugiat nulla deleniti ex
        magni quis!
      </h1>
      <div class="service">
        <Services
          msg="Web Development"
          description="In need of a new website? We'll
        help you build a brand new one. Or expand functionality of your current site."
        />
        <Services
          msg="Android Application Development"
          description="We'll help you develop native Android applications"
        />
        <Services msg="iOS Application Development" description="Här är lite information" />
      </div>
    </section>
    <p>
      Hello:
      <font-awesome-icon icon="coffee" />
    </p>
  </div>
</template>

<script>
import Services from "./components/Services.vue";

export default {
  name: "app",
  components: {
    Services
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#jakobyte {
  text-align: left;
}
#mainsection {
  background-color: #42b983;
  margin-bottom: 4em;
  padding-bottom: 3em;
}
#servicesection.div {
  margin: 4em;
}

.page.h1 {
  position: fixed;
  width: inherit;

  animation: fadeInDown;
  animation-duration: 2s;
}
.service {
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.5em;
  margin: 0.6em;
}

#nav a.router-link-exact-active {
  color: #bee0d1;
}
</style>
