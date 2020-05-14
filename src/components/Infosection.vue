<template>
  <div class="info">
    <h1>{{ msg }}</h1>
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
  background-color: #42b983;
}
</style>