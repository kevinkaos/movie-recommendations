import callApi from '../api/apis';

export const GET_PERSON_DETAILS = 'GET_PERSON_DETAILS';
export const GET_PERSON_MOVIES = 'GET_PERSON_MOVIES';

const initialState = {
  details: [],
};

export const getPersonDetails = (id) => {
  return (dispatch) => {
    callApi.person.getPersonDetails(id).then((res) => {
      dispatch({
        type: GET_PERSON_DETAILS,
        payload: res.data,
      });
    });
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSON_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};
