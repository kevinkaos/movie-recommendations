import callApi from '../api/apis';

export const GET_GENRES = 'GET_GENRES';

const initialState = { genres: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

export const getGenres = () => {
  return (dispatch) => {
    callApi.movie.getMovieGenres().then((res) => {
      dispatch({
        type: GET_GENRES,
        payload: res.data.genres,
      });
    });
  };
};
