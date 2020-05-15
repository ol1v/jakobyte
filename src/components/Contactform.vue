<template>
  <div class="info">
    <input type="button" class="btn-grad" value="Clikc" />
  </div>
</template>

<script>
export default {
  name: "Contactform",
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

.btn-grad {
  background-image: linear-gradient(
    to right,
    #dc2424 0%,
    #4a569d 51%,
    #dc2424 100%
  );
  color: white;
  width: 200px;
  height: 4em;
  border-radius: 0.9em;
}
.btn-grad:hover {
  background-position: right center;
}
</style>