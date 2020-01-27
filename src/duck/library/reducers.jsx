import * as actionTypes from 'duck/library/actionTypes';

const initState = {
  response: '',
  error: '',
};

const reviewReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LIBRARY_REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LIBRARY_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
      };
    case actionTypes.LIBRARY_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;
