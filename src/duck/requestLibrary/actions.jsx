import * as actionTypes from './actionTypes';

export const requestStart = () => {
  return { type: actionTypes.REQUEST_START };
};

export const requestSuccess = data => {
  return { type: actionTypes.REQUEST_SUCCESS, payload: data };
};

export const requestFail = error => {
  return { type: actionTypes.REQUEST_FAIL, payload: error };
};

export const clearState = () => {
  return { type: actionTypes.CLEAR_STATE };
};
