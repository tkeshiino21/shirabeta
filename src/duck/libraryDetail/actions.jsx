import * as actionTypes from 'duck/libraryDetail/actionTypes';

// When page is loaded and, detailRequest runs.
export const detailRequestStart = () => {
  return { type: actionTypes.DETAILREQUEST_START };
};
export const detailRequestSuccess = response => {
  return { type: actionTypes.DETAILREQUEST_SUCCESS, payload: response };
};
export const detailRequestFail = error => {
  return { type: actionTypes.DETAILREQUEST_FAIL, payload: error };
};

// When page is loaded and user push "POST" button,  commentsRequest runs.
export const commentRequestStart = () => {
  return { type: actionTypes.COMMENTREQUEST_START };
};
export const commentRequestSuccess = comment => {
  return { type: actionTypes.COMMENTREQUEST_SUCCESS, payload: comment };
};
export const commentRequestFail = error => {
  return { type: actionTypes.COMMENTREQUEST_FAIL, payload: error };
};

// When user push "BORROW" button, borrow runs.
export const borrowStart = () => {
  return { type: actionTypes.BORROW_START };
};
export const borrowSuccess = () => {
  return { type: actionTypes.BORROW_SUCCESS };
};
export const borrowFail = error => {
  return { type: actionTypes.BORROW_FAIL, payload: error };
};

// When user push "LIKES" button, firebase updates userData and bookData.
export const likeAddStart = () => {
  return { type: actionTypes.LIKEADD_START };
};
export const likeAddSuccess = () => {
  return { type: actionTypes.LIKEADD_SUCCESS };
};
export const likeAddFail = error => {
  return { type: actionTypes.LIKEADD_FAIL, payload: error };
};
export const likeIncFail = error => {
  return { type: actionTypes.LIKEINC_FAIL, payload: error };
};

// When user push "POST" button, firebase updates userData.
export const commentAddStart = () => {
  return { type: actionTypes.COMMENTADD_START };
};
export const commentAddSuccess = () => {
  return { type: actionTypes.COMMENTADD_SUCCESS };
};
export const commentAddFail = error => {
  return { type: actionTypes.COMMENTADD_FAIL, payload: error };
};
export const commentIncFail = error => {
  return { type: actionTypes.COMMENTINC_FAIL, payload: error };
};

// for Reloading Pages after submissiton of comment or like
export const clearState = () => {
  return { type: actionTypes.CLEAR_STATE };
};
