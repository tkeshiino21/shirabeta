import * as actionTypes from 'duck/libraryDetail/actionTypes';

export const detailRequestStart = () => {
  return { type: actionTypes.DETAILREQUEST_START };
};
export const detailRequestSuccess = response => {
  return { type: actionTypes.DETAILREQUEST_SUCCESS, payload: response };
};
export const detailRequestFail = error => {
  return { type: actionTypes.DETAILREQUEST_FAIL, payload: error };
};

export const likeAddStart = () => {
  return { type: actionTypes.LIKEADD_START };
};
export const likeAddSuccess = () => {
  return { type: actionTypes.LIKEADD_SUCCESS };
};
export const likeAddFail = error => {
  return { type: actionTypes.LIKEADD_FAIL, payload: error };
};
export const likeIncStart = () => {
  return { type: actionTypes.LIKEINC_START };
};
export const likeIncSuccess = () => {
  return { type: actionTypes.LIKEINC_SUCCESS };
};
export const likeIncFail = error => {
  return { type: actionTypes.LIKEINC_FAIL, payload: error };
};

export const commentAddStart = () => {
  return { type: actionTypes.COMMENTADD_START };
};
export const commentAddSuccess = () => {
  return { type: actionTypes.COMMENTADD_SUCCESS };
};
export const commentAddFail = error => {
  return { type: actionTypes.COMMENTADD_FAIL, payload: error };
};

export const borrowStart = () => {
  return { type: actionTypes.BORROW_START };
};
export const borrowSuccess = () => {
  return { type: actionTypes.BORROW_SUCCESS };
};
export const borrowFail = error => {
  return { type: actionTypes.BORROW_FAIL, payload: error };
};

// LikesCountEventListener
export const countListenStart = () => {
  return { type: actionTypes.EVENTLISTEN_START };
};
export const countListenSuccess = response => {
  return { type: actionTypes.EVENTLISTEN_SUCCESS, payload: response };
};
export const countListenFail = error => {
  return { type: actionTypes.EVENTLISTEN_FAIL, payload: error };
};

export const commentRequestStart = () => {
  return { type: actionTypes.COMMENTREQUEST_START };
};
export const commentRequestSuccess = comment => {
  return { type: actionTypes.COMMENTREQUEST_SUCCESS, payload: comment };
};
export const commentRequestFail = error => {
  return { type: actionTypes.COMMENTREQUEST_FAIL, payload: error };
};

export const commentIncStart = comment => {
  return { type: actionTypes.COMMENTINC_START };
};
export const commentIncSuccess = comment => {
  return { type: actionTypes.COMMENTINC_SUCCESS };
};
export const commentIncFail = error => {
  return { type: actionTypes.COMMENTINC_FAIL, payload: error };
};

export const setShowSnack = () => {
  return { type: actionTypes.SETSHOW_SNACK };
};
export const setHideSnack = () => {
  return { type: actionTypes.SETHIDE_SNACK };
};
