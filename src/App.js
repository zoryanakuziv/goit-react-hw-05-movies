import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const HomeView = lazy(() => import("./Views/HomeView/HomeView"));
const MovieView = lazy(() => import("./Views/MoviesView/MoviesView"));
const MovieDetailView = lazy(() =>
  import("./Views/MovieDetailView/MovieDetailView")
);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MovieView />} />
          <Route path="movies/:movieId" element={<MovieDetailView />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
