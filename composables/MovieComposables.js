import axios from "axios";
import useMovieStore from "~/stores/movieStore";

const API_KEY = "e29242eb4c132df6f39057f594471f48";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieComposables= ()=> {
  const movieStore = useMovieStore();

  const getMovie = async () => {
    movieStore.movieStart();
    try {
      const { data } = await axios.get(FEATURED_API);
      movieStore.movieSuccess(data.results);
    } catch (error) {
      console.log(error);
      movieStore.movieFail(error);
    }
  };

  const getMovieDetails = async (id) => {
    const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    movieStore.movieStart();
    try {
      const { data } = await axios(movieDetailBaseUrl);
     
      movieStore.movieDetailsSuccess(data);
    } catch (error) {
      console.log(error);
      movieStore.movieFail(error);
    }
  };  

  return { getMovie, getMovieDetails};
}
export default MovieComposables;
