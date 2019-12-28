import React, { useContext, useState } from "react";
import MoviesContext from "../context/movies-context";
import axios from "axios";

const SearchMovieForm = () => {
  const { dispatch } = useContext(MoviesContext);
  const [title, setTitle] = useState("");

  const searchMovie = async e => {
    e.preventDefault();
    dispatch({
      type: "GET_MOVIES_REQUEST"
    });

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${title}&apikey=4a3b711b`
      );

      if (res.data.Response === "True") {
        dispatch({
          type: "GET_MOVIES_SUCCESS",
          payload: res.data.Search
        });
      } else {
        dispatch({
          type: "GET_MOVIES_FAIL"
        });
      }
    } catch (err) {
      dispatch({
        type: "GET_MOVIES_FAIL"
      });
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
