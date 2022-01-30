import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import { toast } from "react-toastify";
import { getMoviesByQuery } from "../../api/Api";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    const newSearch = new URLSearchParams(location.search).get("query");
    setSearchQuery(newSearch);
  }, [navigate, location]);

  useEffect(() => {
    searchQuery && getMovies();
  }, [searchQuery]);

  const onSubmit = (searchQuery) => {
    setMovies([]);

    setSearchQuery(searchQuery);
    navigate({ ...location, search: `query=${searchQuery}` });
  };

  const getMovies = () => {
    getMoviesByQuery(searchQuery).then(({ results }) => {
      if (results.length === 0) {
        toast.error("No movies");
        return;
      }
      setMovies(results);
    });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <MovieList data={movies} />
    </>
  );
}
