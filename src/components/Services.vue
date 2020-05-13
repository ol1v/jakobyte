<template>
  <div class="service">
    <section>
      <h1>{{ msg }}</h1>
      <p>{{ description }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Services",
  props: {
    msg: String,
    description: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
section {
  background-color: #42b983;
}
</style>