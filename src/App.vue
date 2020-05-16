<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <section class="mainsection">
      <div id="nav">
        <h1 id="jakobyte">JAKOBYTE.SE</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <a href="#crew">Crew</a>
      </div>

      <router-view />
    </section>

    <section id="servicesection">
      <h1>What can we offer you?</h1>
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
      <Contactform />
    </section>
    <section id="tech">
      <i class="fab fa-js fa-5x"></i>
      <i class="fab fa-vuejs fa-5x"></i>
      <i class="fab fa-node fa-5x"></i>
      <i class="fab fa-java fa-5x"></i>
      <i class="fab fa-android fa-5x"></i>
      <i class="fab fa-apple fa-5x"></i>
    </section>
    <section id="crew">
      <h1>This is our crew</h1>
      <Team name="Oliver Lennartsson" email="oleg@jakobyte.se " align="left" />
      <Team name="Jakob Salomonsson" email="jakob@jakobyte.se " align="right" />
      <Team name="Henrik Frank" email="frank@jakobyte.se " />
    </section>
  </div>
</template>

<script>
import Services from "./components/Services.vue";
import Contactform from "./components/Contactform.vue";
import Team from "./components/Team.vue";

export default {
  name: "app",
  components: {
    Services,
    Contactform,
    Team
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
  color: #0f0e2e;
  background-color: #000000;
  margin-bottom: 0em;
  padding-bottom: 1.5em;
  background-image: url("https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
}
#jakobyte {
  text-align: left;
}
.mainsection {
  background-color: #ffffff;
  opacity: 0.8;
  padding-bottom: 2em;
}
#servicesection h1 {
  color: white;
}
#servicesection section {
  color: white;
  background-color: transparent;
}

#servicesection.div {
  margin: 4em;
}
#tech {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  padding-top: 8em;
  padding-bottom: 3em;
}
#crew {
  background-color: #0f0e2e;
  color: white;
  padding-top: 0.1em;
  padding-bottom: 4em;
}

.page.h1 {
  position: fixed;
  width: inherit;

  animation: fadeInDown;
  animation-duration: 2s;
}
.service {
  display: flex;
  justify-content: center;
}

#nav {
  padding: 30px;
}
#nav h1 {
  color: #601c3e;
}

#nav a {
  font-weight: bold;
  color: #000000;
  font-size: 1.5em;
  margin: 0.6em;
}
#nav a:hover {
  animation: fadeInDown;
  animation-duration: 2s;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
