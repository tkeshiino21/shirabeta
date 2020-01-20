import * as actionTypes from 'duck/qiita/actionTypes';

export const requestStart = () => {
  return { type: actionTypes.REQUEST_START };
};

export const requestSuccess = response => {
  return { type: actionTypes.REQUEST_SUCCESS, payload: response };
};

export const requestFail = error => {
  return { type: actionTypes.REQUEST_FAIL, payload: error };
};
