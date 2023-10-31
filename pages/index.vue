<template>
 <div class="min-h-screen bg-gray-400">
    <div class="p-5 flex flex-col gap-4">
      <div class="flex justify-center">
        <InputComponents class="w-1/2" />
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
import CardComponents from "../components/card/index.vue";
import InputComponents from "../components/İnput/index.vue";
import useMovieStore from "../stores/movieStore";
definePageMeta({
  layout: "default",
  name: "home",
});
const movieStore = useMovieStore();
movieStore.getMovie();
const { currentMovie } = storeToRefs(movieStore);
</script>
