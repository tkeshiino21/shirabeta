import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import configureStore from 'duck/configureStore';
import App from 'containers/App';
import { Loader, theme } from 'components/atoms';
import GlobalStyles from 'components/atoms/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const fbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'livrio.firebaseapp.com',
  databaseURL: 'https://livrio.firebaseio.com',
  projectId: 'livrio',
  storageBucket: 'livrio.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
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

type Props = {
  children: any;
};
const AuthIsLoaded: FC<Props> = ({ children }) => {
  const auth = useSelector((state: any) => state.firebase.auth);
  if (!isLoaded(auth)) return <Loader />;

  return children;
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <ThemeProvider theme={{ theme }}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
