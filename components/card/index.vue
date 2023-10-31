  <script setup>
  const props = defineProps({
    movie: Object,
  });
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  </script>
<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[550px] flex flex-col justify-between"
  >
    <div class="h-full rounded-t-lg">
      <img
        class="rounded-t-lg h-full hover:scale-[0.95] transition  duration-300 hover:rounded-lg"
        :src="IMG_API + movie.backdrop_path"
        alt="pic"
      />
    </div>

    <div class="p-4 h-[125px]">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap"
      >
        {{ movie.title }}
      </h5>
      <NuxtLink
        :to="`/detail/${movie.id}`"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

