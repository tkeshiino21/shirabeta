import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// router components
import Home from 'components/Home';
// import LibraryDetail from 'components/Home/Library/LibraryDetail/LibraryDetail';
import Search from 'components/Search';
import AddBook from 'components/AddBook';
import MyPage from 'containers/MyPage';
import LogIn from 'containers/LogIn';
import SignUp from 'containers/SignUp';
import NotFoundPage from 'components/NotFoundPage';
import LibraryDetail from 'containers/LibraryDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/my-page" component={MyPage} />
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/library/:id" component={LibraryDetail} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
