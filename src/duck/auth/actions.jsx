import * as actionTypes from './actionTypes';

export const authAction = method => {
  return { type: actionTypes.AUTH_ACTION, payload: method };
};

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = response => {
  return { type: actionTypes.AUTH_SUCCESS, payload: response };
};

export const authFail = error => {
  return { type: actionTypes.AUTH_FAIL, payload: error };
};
