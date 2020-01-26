import * as actionTypes from 'duck/library/actionTypes';

export const libraryRequestStart = () => {
  return { type: actionTypes.LIBRARY_REQUEST_START };
};
export const libraryRequestSuccess = response => {
  return { type: actionTypes.LIBRARY_REQUEST_SUCCESS, payload: response };
};
export const libraryRequestFail = error => {
  return { type: actionTypes.LIBRARY_REQUEST_FAIL, payload: error };
};
