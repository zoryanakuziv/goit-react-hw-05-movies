import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";

const HomeView = lazy(() => import("./Views/HomeView/HomeView"));
const MovieView = lazy(() => import("./Views/MoviesView/MoviesView"));
const MovieDetailView = lazy(() =>
  import("./Views/MovieDetailView/MovieDetailView")
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<MovieView />} />
        <Route path="movies/:movieId" element={<MovieDetailView />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}
