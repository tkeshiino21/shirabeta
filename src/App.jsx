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
import MyPage from 'components/pages/MyPage';
import LibraryDetail from 'components/pages/LibraryDetail';
import About from 'components/pages/About';
import HowToUse from 'components/pages/HowToUse';
import LogIn from 'containers/pages/LogIn';
import SignUp from 'containers/pages/SignUp';
import NotFoundPage from 'components/pages/NotFoundPage';

const App = ({ authState }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book-register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/how-to-use" component={HowToUse} />
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
