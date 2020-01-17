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

// LikesCountEventListener
export const eventListenStart = () => {
  return { type: actionTypes.EVENTLISTEN_START };
};

export const eventListenSuccess = data => {
  return { type: actionTypes.EVENTLISTEN_SUCCESS, payload: data };
};

export const eventListenFail = error => {
  return { type: actionTypes.EVENTLISTEN_FAIL, payload: error };
};

export const collationStart = () => {
  return { type: actionTypes.COLLATION_START };
};

export const collationSuccess = data => {
  return { type: actionTypes.COLLATION_SUCCESS, payload: data };
};

export const collationFail = error => {
  return { type: actionTypes.COLLATION_FAIL, payload: error };
};

export const clearState = () => {
  return { type: actionTypes.CLEAR_STATE };
};
