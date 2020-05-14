<template>
  <div class="Team">
    <img src alt="soldier" />
    <p>{{name}}</p>
    <p>{{email}}</p>
  </div>
</template>

<script>
export default {
  name: "Team",
  props: {
    name: String,
    email: String
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
  margin: 2em;
  width: 10em;
}
</style>