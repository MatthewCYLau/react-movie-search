import axios from "axios";
import { GET_MOVIES } from "./types";

// Get movies
export const getMovies = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_MOVIES,
      payload: res.data.Search
    });
  } catch (err) {
    console.log(err);
  }
};
