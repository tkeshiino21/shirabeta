import rootReducer from 'duck/rootReducer';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';

const middlewares: any = [thunk.withExtraArgument(getFirebase)];

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  return store;
};

export default configureStore;
