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
