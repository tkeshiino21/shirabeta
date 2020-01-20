import { combineReducers } from 'redux';
import authReducer from 'duck/auth/reducers';
import registerReducer from 'duck/bookRegister/reducers';
import libraryReducer from 'duck/library/reducers';
import qiitaReducer from 'duck/qiita/reducers';
import libraryDetailReducer from 'duck/libraryDetail/reducers';
import myPageReducer from 'duck/myPage/reducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  register: registerReducer,
  library: libraryReducer,
  libraryDetail: libraryDetailReducer,
  qiita: qiitaReducer,
  myPage: myPageReducer,
});

export default rootReducer;
