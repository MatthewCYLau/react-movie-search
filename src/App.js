import React, { Fragment, useReducer, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import MoviesList from "./components/MoviesList";
import SearchMovieForm from "./components/SearchMovieForm";
import moviesReducer from "./reducers/movies";
import MoviesContext from "./context/movies-context";

function App() {
  const initialState = {
    movies: [],
    loading: false,
    error: false
  };
  const [movies, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <MoviesContext.Provider value={{ movies, dispatch }}>
      <Fragment>
        <Nav />
        <SearchMovieForm />
        <MoviesList />
      </Fragment>
    </MoviesContext.Provider>
  );
}

export default App;
