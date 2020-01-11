import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import configureStore from 'duck/configureStore';
import App from 'App';
import { Loading } from 'Shared';

const fbConfig = {
  apiKey: 'AIzaSyBhQBb4mkK9noaAbveedCcP5eLSo9qgxMQ',
  authDomain: 'livrio.firebaseapp.com',
  databaseURL: 'https://livrio.firebaseio.com',
  projectId: 'livrio',
  storageBucket: 'livrio.appspot.com',
  messagingSenderId: '101156026665',
  appId: '1:101156026665:web:34b335bb66b8aabd5fdf38',
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

firebase.initializeApp(fbConfig);
firebase.firestore();

const store = configureStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <Loading />;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
