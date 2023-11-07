<template>
  <div class="min-h-screen bg-gray-400">
    <div class="p-5 flex flex-col gap-4">
      <div class="flex justify-center">
        <InputComponents v-if="currentAuth" class="w-1/2" />
      </div>
      <div class="flex justify-center items-center flex-wrap gap-5">
        <CardComponents
          v-for="(movie, index) in currentMovie"
          :key="index"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// import AuthComposables from "../../composables/AuthComposables";
import useAuthStore from "~/stores/authStore";
import CardComponents from "../components/card/index.vue";
import InputComponents from "../components/İnput/index.vue";
import useMovieStore from "~/stores/movieStore";
definePageMeta({
  layout: "default",
  name: "home",
});
const API_KEY = "e29242eb4c132df6f39057f594471f48";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const authStore = useAuthStore();
const { currentAuth } = storeToRefs(authStore);
// const { userObserver } = AuthComposables();
const movieStore = useMovieStore();

movieStore.getMovie(FEATURED_API);
const { currentMovie } = storeToRefs(movieStore);

// userObserver();
</script>
