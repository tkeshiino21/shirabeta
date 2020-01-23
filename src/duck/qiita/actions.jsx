import * as actionTypes from 'duck/qiita/actionTypes';

export const postRequestStart = () => {
  return { type: actionTypes.POST_REQUEST_START };
};

export const postRequestSuccess = data => {
  return { type: actionTypes.POST_REQUEST_SUCCESS, payload: data };
};

export const postRequestFail = error => {
  return { type: actionTypes.POST_REQUEST_FAIL, payload: error };
};
