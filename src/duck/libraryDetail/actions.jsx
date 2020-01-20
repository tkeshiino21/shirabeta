import * as actionTypes from 'duck/libraryDetail/actionTypes';

export const detailRequestStart = () => {
  return { type: actionTypes.REQUEST_START };
};
export const detailRequestSuccess = response => {
  return { type: actionTypes.REQUEST_SUCCESS, payload: response };
};
export const detailRequestFail = error => {
  return { type: actionTypes.REQUEST_FAIL, payload: error };
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

export const commentAddStart = () => {
  return { type: actionTypes.COMMENTADD_START };
};
export const commentAddSuccess = () => {
  return { type: actionTypes.COMMENTADD_SUCCESS };
};
export const commentAddFail = error => {
  return { type: actionTypes.COMMENTADD_FAIL, payload: error };
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

export const collationStart = () => {
  return { type: actionTypes.COLLATION_START };
};
export const collationSuccess = data => {
  return { type: actionTypes.COLLATION_SUCCESS, payload: data };
};
export const collationFail = error => {
  return { type: actionTypes.COLLATION_FAIL, payload: error };
};
