import * as actionTypes from './actionTypes';

export const requestStart = ISBN => {
  return { type: actionTypes.REQUEST_START, payload: ISBN };
};

export const requestSuccess = book => {
  return { type: actionTypes.REQUEST_SUCCESS, payload: book };
};

export const requestFail = error => {
  return { type: actionTypes.REQUEST_FAIL, payload: error };
};
