const API_KEY = "e29242eb4c132df6f39057f594471f48";

const useMovieStore = defineStore("movieStore", {
  state: () => ({
    currentMovie: [],
    currentDetail: [],
    loading: false,
    error:false
  }),
  getters: {},
  actions: {
    movieStart() {
      this.loading = true;
      this.error = false;
    },
    movieSuccess(payload) {
      this.loading = false;
      this.currentMovie = payload;
      this.error = false;
    },
    movieFail() {
      this.loading = false;
      this.error = true;
    },
    movieDetailsSuccess(payload) {
      this.loading = false;
      this.currentDetail = payload;
      this.error = false;
    }
  },
});

export default useMovieStore;
