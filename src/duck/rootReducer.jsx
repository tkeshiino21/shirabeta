import { combineReducers } from 'redux';
import authReducer from 'duck/auth/reducers';
import addReducer from 'duck/bookAdd/reducers';
import requestReducer from 'duck/request/reducers';
import libraryReducer from 'duck/requestLibrary/reducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  add: addReducer,
  request: requestReducer,
  library: libraryReducer,
});

export default rootReducer;
