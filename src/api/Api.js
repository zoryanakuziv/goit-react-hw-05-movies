import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "e0f5a2b3f12c3f7ea9352edce7e33432",

  page: 1,
};

export async function getTrendingMovies() {
  const { data } = await axios
    .get("/trending/movie/day")
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

export async function getMovieById(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

export async function getMoviesByQuery(searchQuery) {
  const { data } = await axios
    .get("/search/movie?", {
      params: { query: searchQuery },
    })
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

export async function getCredits(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
}

export async function getReviews(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
}
