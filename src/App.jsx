import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Auth from 'components/organisms/Auth';
// route components
import Home from 'components/pages/Home';
// import BookRegister from 'components/pages/BookRegister';
// import MyPage from 'containers/MyPage/MyPage';
import LogIn from 'containers/AuthPages/LogIn';
import SignUp from 'containers/AuthPages/SignUp';
import AuthPages from 'components/templates/AuthPagesTemplate';
// import NotFoundPage from 'components/pages/NotFoundPage';
// import Library from 'components/pages/Library';
// import LibraryDetail from 'containers/Home/LibraryDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Auth> */}
        {/* <Route path="/my-page" component={MyPage} />
        <Route path="/library" exact component={Library} />
        <Route path="/library/:id" component={LibraryDetail} /> */}
        {/* </Auth> */}
        <Route path="/" exact component={Home} />
        {/* <Route path="/book-register" component={BookRegister} /> */}
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/auth" component={AuthPages} />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </Router>
  );
};

export default App;
