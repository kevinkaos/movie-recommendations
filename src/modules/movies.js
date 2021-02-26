import callApi from '../api/apis'

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES'

const initialState = {
  popularMovies: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      }
    default:
      return state
  }
}

export const getPopularMovies = () => {
  return (dispatch) => {
    callApi.movie.getMovies().then((res) => {
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data.results,
      })
    })
  }
}
