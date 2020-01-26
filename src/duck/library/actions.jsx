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

export const setShowSnack = () => {
  return { type: actionTypes.SETSHOW_SNACK };
};
export const setHideSnack = () => {
  return { type: actionTypes.SETHIDE_SNACK };
};
