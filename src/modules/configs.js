import callApi from '../api/apis'

export const GET_CONFIG = 'GET_CONFIG'

const initialState = {
  config: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONFIG:
      return {
        ...state,
        config: action.payload,
      }
    default:
      return state
  }
}

export const getConfig = () => {
  return (dispatch) => {
    callApi.configuration.getApiConfig().then((res) => {
      dispatch({
        type: GET_CONFIG,
        payload: res.data.images,
      })
    })
  }
}
