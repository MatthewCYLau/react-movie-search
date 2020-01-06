import React, { useContext, useState } from "react";
import MoviesContext from "../context/movies-context";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

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
    <div className="container">
      <h2 className="lead-text">Search for your favourite movie posters</h2>
      <Form onSubmit={searchMovie}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Movie Name"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>
        {/* <Button variant="primary" type="submit">
          Search!
        </Button> */}
      </Form>
    </div>
  );
};

export default SearchMovieForm;
