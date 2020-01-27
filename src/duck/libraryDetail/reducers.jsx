import * as actionTypes from 'duck/libraryDetail/actionTypes';

const initState = {
  response: '',
  listen: '',
  error: '',
  isLoading: '',
  isAdding: false,
  isFetching: '', // comment
  likes: '',
  showSnack: false,
  comment: '',
  borrow: '',
  colloationComments: [],
  colloationLikes: [],
};

const requestReducer = (state = initState, action) => {
  switch (action.type) {
    // When page is loaded and, detailRequest runs.
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
    // When user push "BORROW" button, borrow runs.
    case actionTypes.BORROW_START:
      return {
        ...state,
        isBorrowing: true,
      };
    case actionTypes.BORROW_SUCCESS:
      return {
        ...state,
        isBorrowing: false,
        borrow: action.payload,
      };
    case actionTypes.BORROW_FAIL:
      return {
        ...state,
        isBorrowing: false,
        error: action.payload,
      };
    // When page is loaded and user push "POST" button,  commentsRequest runs.
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
    // When user push "LIKES" button, firebase updates userData and bookData.
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
        error: action.payload,
      };
    case actionTypes.LIKEINC_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    // When user push "POST" button, firebase updates userData
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
        error: action.payload,
      };
    case actionTypes.COMMENTINC_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    // for Reloading Pages after submissiton of comment or like
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
