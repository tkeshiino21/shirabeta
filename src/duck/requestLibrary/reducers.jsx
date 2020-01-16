import * as actionTypes from 'duck/request/actionTypes';

const initState = {
  response: '',
  error: '',
  isLoading: '',
};

const requestReducer = (state = initState, action) => {
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
        error: action.payload,
      };
    case actionTypes.CLEAR_STATE:
      return {
        ...state,
        // response: '',
        error: '',
        isLoading: false,
      };
    default:
      return state;
  }
};

export default requestReducer;