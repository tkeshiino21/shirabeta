import * as actionTypes from 'duck/libraryDetail/actionTypes';

const initState = {
  response: '',
  listen: '',
  error: '',
  isLoading: '',
  isFetching: '', //comment
  likes: '',
  showSnack: false,
  comment: '',
  colloationComments: [],
  colloationLikes: [],
};

const requestReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.DETAILREQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.DETAILREQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
      };
    case actionTypes.DETAILREQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.COMMENTREQUEST_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.COMMENTREQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comment: action.payload,
      };
    case actionTypes.COMMENTREQUEST_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.CLEAR_STATE:
      return {
        ...state,
        // response: '',
        error: '',
        isLoading: false,
      };
    case actionTypes.SETSHOW_SNACK:
      return {
        ...state,
        showSnack: true,
      };
    case actionTypes.SETHIDE_SNACK:
      return {
        ...state,
        showSnack: false,
      };
    default:
      return state;
  }
};

export default requestReducer;
