import * as actionTypes from 'duck/myPage/actionTypes';

const initState = {
  response: '',
  error: '',
  isLoading: '',
  userComments: '',
  userLikes: '',
};

const myPageReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionTypes.MYPAGE_REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.MYPAGE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
      };
    case actionTypes.MYPAGE_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.RETURN_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.RETURN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.RETURN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.USERLIKES_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.USERLIKES_SUCCESS:
      return {
        ...state,
        userLikes: action.payload,
        isLoading: false,
      };
    case actionTypes.USERLIKES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.USERCOMMENTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.USERCOMMENTS_SUCCESS:
      return {
        ...state,
        userComments: action.payload,
        isLoading: false,
      };
    case actionTypes.USERCOMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default myPageReducer;
