const initialState = {
  movies: [],
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        movies: payload,
        loading: false,
        error: false
      };
    case "GET_MOVIES_FAIL":
      return {
        ...state,
        error: true,
        loading: false
      };

    default:
      return state;
  }
}
