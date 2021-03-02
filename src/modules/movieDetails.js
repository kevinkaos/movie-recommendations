import callApi from '../api/apis';

export const GET_DETAILS = 'GET_DETAILS';
export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_CREDITS = 'GET_CREDITS';
export const GET_SIMILAR = 'GET_SIMILAR';

const initialState = {
  details: [],
  similarMovies: [],
  reviews: [],
  credits: [],
};

export const getDetails = (id) => {
  return (dispatch) => {
    callApi.movie.getMovieDetails(id).then((res) => {
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

export const getReviews = (id) => {
  return (dispatch) => {
    callApi.movie.getMovieCredits(id).then((res) => {
      dispatch({
        type: GET_REVIEWS,
        payload: res.data,
      });
    });
  };
};

export const getCredits = (id) => {
  return (dispatch) => {
    callApi.movie.getMovieReviews(id).then((res) => {
      dispatch({
        type: GET_CREDITS,
        payload: res.data,
      });
    });
  };
};

export const getSimilar = (id) => {
  return (dispatch) => {
    callApi.movie.getMovieSimilar(id).then((res) => {
      dispatch({
        type: GET_SIMILAR,
        payload: res.data,
      });
    });
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case GET_CREDITS:
      return {
        ...state,
        credits: action.payload,
      };
    case GET_SIMILAR:
      return {
        ...state,
        similarMovies: action.payload,
      };
    default:
      return state;
  }
};
