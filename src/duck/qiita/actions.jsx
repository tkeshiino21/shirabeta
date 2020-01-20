import * as actionTypes from 'duck/qiita/actionTypes';

export const requestStart = () => {
  return { type: actionTypes.REQUEST_START };
};

export const requestSuccess = data => {
  return { type: actionTypes.REQUEST_SUCCESS, payload: data };
};

export const requestFail = error => {
  return { type: actionTypes.REQUEST_FAIL, payload: error };
};
