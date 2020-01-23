import * as actionTypes from 'duck/qiita/actionTypes';

const initState = {
  response: '',
  error: '',
  isLoading: '',
};

const requestReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.POST_REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.POST_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
      };
    case actionTypes.POST_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // case actionTypes.CLEAR_STATE:
    //   return {
    //     ...state,
    //     response: '',
    //     error: '',
    //     isLoading: false,
    //   };
    default:
      return state;
  }
};

export default requestReducer;
