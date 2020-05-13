<template>
  <div id="app">
    <section id="mainsection">
      <span>
        <h1 id="jakobyte">JAKOBYTE</h1>
        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
      </span>

      <router-view />
    </section>

    <section>
      <h2>hej</h2>
    </section>
  </div>
</template>

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
  position: fixed;
  width: 100%;
  height: 70%;
}
.page.h1 {
  position: fixed;
  width: inherit;

  animation: fadeInDown;
  animation-duration: 2s;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.5em;
}

#nav a.router-link-exact-active {
  color: #bee0d1;
}
</style>
