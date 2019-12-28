import React, { Fragment, useContext } from "react";
import MoviesContext from "../context/movies-context";
import { Spinner } from "react-bootstrap";

const MoviesList = () => {
  const { movies } = useContext(MoviesContext);

  return movies.loading ? (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : movies.error ? (
    <p>Please try again</p>
  ) : (
    <Fragment>
      <p>Movies List</p>
      {movies.movies.map((movie, index) => (
        <p key={index}>{movie.Title}</p>
      ))}
    </Fragment>
  );
};

export default MoviesList;
