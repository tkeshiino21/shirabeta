import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// router components
import Home from 'components/Home';
// import LibraryDetail from 'components/Home/Library/LibraryDetail/LibraryDetail';
import BookRegister from 'components/BookRegister/BookRegister';
import MyPage from 'containers/MyPage/MyPage';
import LogIn from 'containers/AuthPages/LogIn';
import SignUp from 'containers/AuthPages/SignUp';
import NotFoundPage from 'components/NotFoundPage';
import LibraryDetail from 'containers/Home/LibraryDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/my-page" component={MyPage} />
        <Route path="/" exact component={Home} />
        <Route path="/book-register" component={BookRegister} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/library/:id" component={LibraryDetail} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
