<script setup>
  import useAuthStore from "~/stores/authStore";
  // import CardComponents from "../components/card/CostumeCard.vue";
  // import InputComponents from "../components/İnput/InputComponent.vue";
  import useMovieStore from "~/stores/movieStore";
  import MovieComposables from "/composables/MovieComposables";
// useHead({
//   title: "MovieVue",
//   meta:[{name:"description",content:"Movie Demo"},{property:"og:title",content:"this is og Title"}],
//   link:[{rel:"icon",href:"/favicon.ico"}]
// })


definePageMeta({
  name: "home",
});
const { getMovie} = MovieComposables();
const authStore = useAuthStore();
const { currentAuth } = storeToRefs(authStore);
const movieStore = useMovieStore();
const { currentMovie } = storeToRefs(movieStore);

getMovie();

</script>

<template>
  <div class="min-h-screen bg-gray-400">
    <div class="p-5 flex flex-col gap-4">
      <div class="flex justify-center">
        <LazyInputComponent v-if="currentAuth" class="w-1/2" />
      </div>
      <div class="flex justify-center items-center flex-wrap gap-5">
        <CardCostumeCard
          v-for="(movie, index) in currentMovie"
          :key="index"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>
