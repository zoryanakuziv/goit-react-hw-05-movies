import { getTrendingMovies } from "../../api/Api";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { Header } from "./HomeView.styled";

export default function HomeView() {
  // const { url } = useRouteMatch();
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(({ results }) => setTrendingMoviesList(results));
  }, []);
  return (
    <>
      <Header>Trending today</Header>
      <MovieList data={trendingMoviesList} />
    </>
  );
}
