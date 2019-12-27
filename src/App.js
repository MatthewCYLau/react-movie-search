import React, { Fragment, useReducer, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import SearchMovieForm from "./components/SearchMovieForm";
import moviesReducer from "./reducers/movies";
import MoviesContext from "./context/movies-context";

function App() {
  const initialState = {
    movies: [],
    loading: false
  };
  const [movies, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <MoviesContext.Provider value={{ movies, dispatch }}>
      <Fragment>
        <Nav />
        <SearchMovieForm />
        <Movies />
      </Fragment>
    </MoviesContext.Provider>
  );
}

export default App;
