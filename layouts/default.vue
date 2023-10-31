<template>
  <Navbar />

  <div>
    <slot />
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/navbar/index.vue";
import Footer from "../components/footer/index.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
