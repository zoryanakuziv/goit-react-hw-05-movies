import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import { getMovieById } from "../../api/Api";
import {
  Button,
  MovieCard,
  MovieInfo,
  Genres,
  Genre,
  LinkStyled,
} from "./MovieDetailView.styled";

export default function MovieDetailView() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? "/");
    return;
  };

  return (
    <>
      {movie && (
        <>
          <Button type="button" onClick={onGoBack}>
            Go back
          </Button>
          <MovieCard>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <MovieInfo>
              <h2>
                {movie.title} ({movie.release_date})
              </h2>
              <p>User Score: {movie.vote_average}%</p>
              <h3>Overview</h3>
              {movie.overview && <p>{movie.overview}</p>}
              <h3>Genres</h3>
              <Genres>
                {movie.genres.map(({ id, name }) => (
                  <Genre key={id}>{name}</Genre>
                ))}
              </Genres>
            </MovieInfo>
          </MovieCard>
          <div>
            <ul>
              <LinkStyled>
                <Link to="cast" state={{ from: location?.state?.from ?? "/" }}>
                  Cast
                </Link>
              </LinkStyled>
              <LinkStyled>
                <Link
                  to="reviews"
                  state={{ from: location?.state?.from ?? "/" }}
                >
                  Review
                </Link>
              </LinkStyled>
            </ul>

            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
