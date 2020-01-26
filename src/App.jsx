import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// route components
import Home from 'components/pages/Home';
import Register from 'components/pages/Register';
import MyPage from 'containers/pages/MyPage';
import LogIn from 'containers/pages/LogIn';
import SignUp from 'containers/pages/SignUp';
import NotFoundPage from 'components/pages/NotFoundPage';
import LibraryDetail from 'containers/pages/LibraryDetail';

const App = ({ authState }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book-register" component={Register} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/hoggge" component={Register} />
        <Route
          path="/library/:id"
          render={() =>
            authState === true ? (
              <LibraryDetail />
            ) : (
              <Redirect to={{ pathname: '/login', state: '/library' }} />
            )
          }
        />
        <Route
          path="/my-page"
          render={() =>
            authState === true ? (
              <MyPage />
            ) : (
              <Redirect to={{ pathname: '/login', state: '/my-page' }} />
            )
          }
        />
        <NotFoundPage />
      </Switch>
    </Router>
  );
};

export default App;
