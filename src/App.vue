<template>
  <div id="app">
    <section class="mainsection">
      <div id="nav">
        <h1 id="jakobyte">JAKOBYTE.SE</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
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
    </section>
    <section>
      <p>
        Hello:
        <font-awesome-icon icon="coffee" />
      </p>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae magni totam, neque tempora recusandae, quam enim, dolore explicabo nihil veniam eum. Quas commodi ipsa distinctio id minus ratione non deserunt?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam perferendis dolore itaque ut quidem vitae similique ratione nulla dicta, voluptatum modi rem quis explicabo, odit odio cum ipsam earum! Sint.
      </h1>
    </section>
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
#servicesection {
}
#servicesection section {
  color: white;
  background-color: transparent;
  opacity: 0.7;
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

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
