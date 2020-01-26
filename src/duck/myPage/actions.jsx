import * as actionTypes from 'duck/myPage/actionTypes';

export const myPageRequestStart = () => {
  return { type: actionTypes.MYPAGE_REQUEST_START };
};

export const myPageRequestSuccess = response => {
  return { type: actionTypes.MYPAGE_REQUEST_SUCCESS, payload: response };
};

export const myPageRequestFail = error => {
  return { type: actionTypes.MYPAGE_REQUEST_FAIL, payload: error };
};

export const returnStart = () => {
  return { type: actionTypes.RETURN_START };
};

export const returnSuccess = () => {
  return { type: actionTypes.RETURN_SUCCESS };
};

export const returnFail = error => {
  return { type: actionTypes.RETURN_FAIL, payload: error };
};

export const userCommentsStart = () => {
  return { type: actionTypes.USERCOMMENTS_START };
};

export const userCommentsSuccess = response => {
  return { type: actionTypes.USERCOMMENTS_SUCCESS, payload: response };
};

export const userCommentsFail = error => {
  return { type: actionTypes.USERCOMMENTS_FAIL, payload: error };
};
export const userLikesStart = () => {
  return { type: actionTypes.USERLIKES_START };
};

export const userLikesSuccess = response => {
  return { type: actionTypes.USERLIKES_SUCCESS, payload: response };
};

export const userLikesFail = error => {
  return { type: actionTypes.USERLIKES_FAIL, payload: error };
};
