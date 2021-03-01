import callApi from '../api/apis';

export const GET_MOVIES = 'GET_MOVIES';

const initialState = { all: { results: [] } };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
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
