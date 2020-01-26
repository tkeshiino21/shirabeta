import * as actionTypes from 'duck/bookRegister/actionTypes';

// Request GoogleBooksAPI for book data
export const bookRequestStart = () => {
  return { type: actionTypes.BOOK_REQUEST_START };
};
export const bookRequestSuccess = (response, ISBN) => {
  return {
    type: actionTypes.BOOK_REQUEST_SUCCESS,
    payload: {
      response: response,
      inputISBN: ISBN,
    },
  };
};
export const bookRequestFail = error => {
  return { type: actionTypes.BOOK_REQUEST_FAIL, payload: error };
};

// Register fetched book data  with firestore
export const registerStart = () => {
  return { type: actionTypes.REGISTER_START };
};
export const registerSuccess = () => {
  return { type: actionTypes.REGISTER_SUCCESS };
};
export const registerFail = error => {
  return { type: actionTypes.REGISTER_FAIL, payload: error };
};

// After Submition, clear fetched book data
export const clearBookData = () => {
  return { type: actionTypes.CLEAR_BOOKDATA };
};
export const reloadPage = () => {
  return { type: actionTypes.RELOAD_PAGE };
};
