<template>
  <Navbar />

  <div>
    <slot />
  </div>
  <Footer />
</template>

<script>
import AuthComposables from "../../composables/AuthComposables";
import Navbar from "../components/navbar/index.vue";
import Footer from "../components/footer/index.vue";

export default {
  name: "default",
  components: {
    Navbar,
    Footer,
  },
  setup(){
    const { userObserver } = AuthComposables();
    userObserver()

  }
};
</script>
