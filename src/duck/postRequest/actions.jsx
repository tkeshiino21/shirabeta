import * as actionTypes from './actionTypes';

export const requestStart = () => {
  return { type: actionTypes.REQUEST_START };
};

export const requestSuccess = post => {
  return { type: actionTypes.REQUEST_SUCCESS, payload: post };
};

export const requestFail = error => {
  return { type: actionTypes.REQUEST_FAIL, payload: error };
};
