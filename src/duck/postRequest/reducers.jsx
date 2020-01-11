import * as actionTypes from 'duck/postRequest/actionTypes';

const initState = {
  state1: 1,
  state2: 2,
  response: '',
  isLoading: '',
};

const postRequestReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
      };
    case actionTypes.REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        // response: response,
      };
    default:
      return state;
  }
};

export default postRequestReducer;
