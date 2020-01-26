import * as actionTypes from 'duck/library/actionTypes';

const initState = {
  response: '',
  error: '',
  isAdding: '',
  colloationComments: [],
  colloationLikes: [],
  showSnack: false,
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
        response: action.payload,
      };
    case actionTypes.COMMENTADD_START:
      return {
        ...state,
        isAdding: true,
        showSnack: false,
      };
    case actionTypes.COMMENTADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
      };
    case actionTypes.COMMENTADD_FAIL:
      return {
        ...state,
        error: action.payload,
        isAdding: false,
      };
    case action.type.CLEAR_STATE:
      return {
        response: '',
        error: '',
        isAdding: false,
      };
    default:
      return state;
  }
};

export default reviewReducer;
