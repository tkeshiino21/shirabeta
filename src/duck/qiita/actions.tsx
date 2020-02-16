import * as actionTypes from 'duck/qiita/actionTypes';

// When user visit Qiita page, postRequest runs
export const postRequestStart = () => {
  return { type: actionTypes.POST_REQUEST_START };
};
export const postRequestSuccess = (data: object) => {
  return { type: actionTypes.POST_REQUEST_SUCCESS, payload: data };
};
export const postRequestFail = (error: object) => {
  return { type: actionTypes.POST_REQUEST_FAIL, payload: error };
};
