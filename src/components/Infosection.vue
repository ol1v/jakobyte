<template>
  <div class="info">
    <section>
      <h1>{{ msg }}</h1>
      <p>This is a journey beyond space and time.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Infosection",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
section {
}
</style>