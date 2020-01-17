import * as actionTypes from 'duck/requestLibrary/actionTypes';

const initState = {
  response: '',
  listen: '',
  error: '',
  isLoading: '',
  likes: '',
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
        response: action.payload,
      };
    case actionTypes.EVENTLISTEN_START:
      return {
        ...state,
        // isLoading: true,
      };
    case actionTypes.EVENTLISTEN_SUCCESS:
      return {
        ...state,
        // isLoading: false,
        listen: action.payload,
      };
    case actionTypes.EVENTLISTEN_FAIL:
      return {
        ...state,
        // isLoading: false,
        // error: action.payload,
      };
    case actionTypes.COLLATION_START:
      return {
        ...state,
        // isLoading: true,
      };
    case actionTypes.COLLATION_SUCCESS:
      return {
        ...state,
        // isLoading: false,
        likes: action.payload,
      };
    case actionTypes.COLLATION_FAIL:
      return {
        ...state,
        // isLoading: false,
        // error: action.payload,
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
