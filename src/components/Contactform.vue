<template>
  <div class="info">
    <input
      type="button"
      class="btn-grad"
      value="SEND US YOUR IDEA"
      @click="activateForm"
      v-if="!isFormActive"
    />

    <form action v-if="isFormActive">
      <input type="text" v-model="placeholderemail" />
      <input type="textarea" placeholder="In short, what's on your mind?..." />
      <input type="button" class="btn-grad" value="SEND" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Contactform",
  data() {
    return {
      placeholderemail: 'example@example.com'
    }
  },
  props: {
    msg: String
  },
  computed: {
    isFormActive() {
      return this.$store.getters.formActive;
    }
  },
  methods: {
    activateForm() {
      this.$store.dispatch("formbutton");
    }
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
form {
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #da22ff 0%,
    #9733ee 51%,
    #da22ff 100%
  );
  width: 200px;
  height: 4em;

  display: inline-block;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition-duration: 1s;
}
.btn-grad:hover {
  background-image: linear-gradient(
    to right,
    #da22ff 70%,
    #9733ee 51%,
    #da22ff 0%
  );
  background-position: right center;
}
</style>