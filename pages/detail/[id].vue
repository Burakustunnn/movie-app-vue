<script setup>
import useMovieStore from "../stores/movieStore";
const route = useRoute();
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const movieStore = useMovieStore();
movieStore.getMovieDetails(route.params.id);
const { currentDetail } = storeToRefs(movieStore);
console.log(currentDetail);
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-400">
    <div
      class="w-[750px] h-[500px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="h-full w-full flex-1">
        <img
          class="rounded-s-lg object-cover h-full w-full"
          :src="IMG_API + currentDetail.backdrop_path"
          alt="pic"
        />
      </div>

      <div
        class="flex flex-col justify-center items-center px-4 leading-normal flex-1"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ currentDetail.title }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ currentDetail.overview }}
        </p>
      </div>
    </div>
  </div>
</template>
