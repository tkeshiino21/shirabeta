import * as actionTypes from 'duck/library/actionTypes';

export const libraryRequestStart = () => {
  return { type: actionTypes.REQUEST_START };
};
export const libraryRequestSuccess = response => {
  return { type: actionTypes.REQUEST_SUCCESS, payload: response };
};
export const libraryRequestFail = error => {
  return { type: actionTypes.REQUEST_FAIL, payload: error };
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
