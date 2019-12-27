import React, { useContext } from "react";
import MoviesContext from "../context/movies-context";

const Movies = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div>
      Movies
      {movies.movies.map((movie, index) => (
        <p key={index}>{movie.Title}</p>
      ))}
    </div>
  );
};

export default Movies;
