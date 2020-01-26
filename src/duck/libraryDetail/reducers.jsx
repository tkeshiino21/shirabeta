import * as actionTypes from 'duck/libraryDetail/actionTypes';

const initState = {
  response: '',
  listen: '',
  error: '',
  isLoading: '',
  isAdding: false,
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
    case actionTypes.LIKEADD_START:
      return {
        ...state,
        isAdding: true,
      };
    case actionTypes.LIKEADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
      };
    case actionTypes.LIKEADD_FAIL:
      return {
        ...state,
        isAdding: false,
      };
    case actionTypes.COMMENTADD_START:
      return {
        ...state,
        isAdding: true,
      };
    case actionTypes.COMMENTADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
        showSnack: true,
      };
    case actionTypes.COMMENTADD_FAIL:
      return {
        ...state,
        isAdding: false,
      };
    case actionTypes.COMMENTINC_START:
      return {
        ...state,
      };
    case actionTypes.COMMENTINC_SUCCESS:
      return {
        ...state,
      };
    case actionTypes.COMMENTINC_FAIL:
      return {
        ...state,
      };
    case actionTypes.CLEAR_STATE:
      return {
        ...state,
        showSnack: false,
        error: '',
        isLoading: false,
      };
    default:
      return state;
  }
};

export default requestReducer;
