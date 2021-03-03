import callApi from '../api/apis';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_BY_GENRE = 'GET_MOVIES_BY_GENRE';

const initialState = { all: { results: [] } };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        all: action.payload,
      };
    case GET_MOVIES_BY_GENRE:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
};

export const getMovies = (type = 'popular', page = 1) => {
  return (dispatch) => {
    callApi.movie.getMovies(type, page).then((res) => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
    });
  };
};

export const getMoviesByGenre = (id, page) => {
  return (dispatch) => {
    callApi.movie.getMoviesByGenre(id, page).then((res) => {
      dispatch({
        type: GET_MOVIES_BY_GENRE,
        payload: res.data,
      });
    });
  };
};
