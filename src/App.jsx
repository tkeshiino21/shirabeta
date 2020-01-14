import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// router components
import Home from 'components/Home';
import Search from 'components/Search';
import AddBook from 'components/AddBook';
import MyPage from 'containers/MyPage';
import LogIn from 'components/AuthPages/LogIn';
import SignUp from 'components/AuthPages/SignUp';
import NotFoundPage from 'components/NotFoundPage';

const App = ({ authState }) => {
  return (
    <Router>
      <Switch>
        <Route path="/my-page" component={MyPage} />
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
