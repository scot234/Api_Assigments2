import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMovies";
import PlayingnowMoviesPage from "./pages/playingnowMovies";
import TrendingMoviesPage from "./pages/trendingMovies";
import PopularMoviesPage from "./pages/popularMovies";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AuthProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import AuthHeader from "./authHeader";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <SiteHeader />
      
      <AuthProvider><AuthHeader />
      <MoviesContextProvider>
        <Routes>
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/movies/upcoming" element={< UpcomingMoviesPage />} />
          <Route path="/movies/playingnow" element={< PlayingnowMoviesPage />} />
          <Route path="/movies/trending" element={< TrendingMoviesPage />} />
          <Route path="/movies/popular" element={< PopularMoviesPage />} />
          </Route>
          <Route path="/movies/login" element={< LoginPage />} />
          <Route path="/movies/signup" element={< SignUpPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </MoviesContextProvider>
      </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));