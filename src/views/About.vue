<template>
  <div class="about page">
    <div class="animate__animated animate__fadeInRight">
      <Infosection msg="This is really cool stuff" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Infosection from "@/components/Infosection.vue";

export default {
  name: "About",
  components: {
    Infosection
  }
};
</script>