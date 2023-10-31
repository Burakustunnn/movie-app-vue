const useMovieStore = defineStore("movieStore", {
  state: () => ({
    currentMovie: [],
    loading: false,
    currentDetail: [],
  }),
  getters: {},
  actions: {
    async getMovie() {
      const API_KEY = "e29242eb4c132df6f39057f594471f48";
      const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

      this.loading = true;
      const res = await fetch(FEATURED_API);
      const data = await res.json();

      this.currentMovie = data.results;
      this.loading = false;
    },
    async getMovieDetails(id) {
      const API_KEY = "e29242eb4c132df6f39057f594471f48";
      const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

      this.loading = true;
      const res = await fetch(movieDetailBaseUrl);
      const data = await res.json();
      this.currentDetail = data;
      this.loading = false;

      console.log(data);
    },
  },
});

export default useMovieStore;