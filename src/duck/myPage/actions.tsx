import * as actionTypes from 'duck/myPage/actionTypes';

// when user visit myPage, myPageRequest runs
export const myPageRequestStart = () => {
  return { type: actionTypes.MYPAGE_REQUEST_START };
};
export const myPageRequestSuccess = (response: any) => {
  return { type: actionTypes.MYPAGE_REQUEST_SUCCESS, payload: response };
};
export const myPageRequestFail = (error: any) => {
  return { type: actionTypes.MYPAGE_REQUEST_FAIL, payload: error };
};

// when user push "返却" button, return runs
export const returnStart = () => {
  return { type: actionTypes.RETURN_START };
};
export const returnSuccess = () => {
  return { type: actionTypes.RETURN_SUCCESS };
};
export const returnFail = (error: any) => {
  return { type: actionTypes.RETURN_FAIL, payload: error };
};

// for Fetching user's comments data
export const userCommentsStart = () => {
  return { type: actionTypes.USERCOMMENTS_START };
};
export const userCommentsSuccess = (response: any) => {
  return { type: actionTypes.USERCOMMENTS_SUCCESS, payload: response };
};
export const userCommentsFail = (error: any) => {
  return { type: actionTypes.USERCOMMENTS_FAIL, payload: error };
};

// for Fetching user's likes data
export const userLikesStart = () => {
  return { type: actionTypes.USERLIKES_START };
};
export const userLikesSuccess = (response: any) => {
  return { type: actionTypes.USERLIKES_SUCCESS, payload: response };
};
export const userLikesFail = (error: any) => {
  return { type: actionTypes.USERLIKES_FAIL, payload: error };
};
