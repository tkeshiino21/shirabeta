import * as actionTypes from 'duck/auth/types';

const initState = {
  authState: false,
  userName: '',
  userEmail: '',
  userPassword: '',
};

const authReducer = (state = initState) => {
  switch (actionTypes) {
    case 'AuthStart':
      return {
        ...state,
        authError: 'Login failed',
      };
    case 'AuthSuccess':
      return {
        ...state,
        authError: null,
      };
    case 'AuthFail':
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
