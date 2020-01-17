import * as actionTypes from 'duck/bookAdd/actionTypes';

const initState = {
  response: '',
  error: '',
  isAdding: '',
};

const addReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.BOOKADD_START:
      return {
        ...state,
        isAdding: true,
      };
    case actionTypes.BOOKADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
      };
    case actionTypes.BOOKADD_FAIL:
      return {
        ...state,
        error: action.payload,
        isAdding: false,
      };
    case action.type.CLEAR_STATE:
      return {
        response: '',
        error: '',
        isAdding: false,
      };
    default:
      return state;
  }
};

export default addReducer;
