import React, { useContext, useState } from "react";
import MoviesContext from "../context/movies-context";
import axios from "axios";

const SearchMovieForm = () => {
  const { dispatch } = useContext(MoviesContext);
  const [title, setTitle] = useState("");

  const searchMovie = async e => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${title}&apikey=4a3b711b`
      );

      dispatch({
        type: "GET_MOVIES",
        payload: res.data.Search
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>Search for your favourite movies</p>
      <form onSubmit={searchMovie}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchMovieForm;
