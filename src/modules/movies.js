import callApi from '../api/apis'

export const GET_MOVIES = 'GET_MOVIES'

const initialState = {
  movies: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      }
    default:
      return state
  }
}

export const getMovies = (type = 'popular') => {
  return (dispatch) => {
    callApi.movie.getMovies(type).then((res) => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data.results,
      })
    })
  }
}
