import { combineReducers } from 'redux';
import authReducer from 'duck/auth/reducers';
import postRequestReducer from 'duck/postRequest/reducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  post: postRequestReducer,
});

export default rootReducer;
