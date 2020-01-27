import * as actionTypes from 'duck/auth/actionTypes';

const initState = {
  userName: '',
  userEmail: '',
  userPassword: '',
  authError: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
