import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// for style
import { ThemeProvider } from 'styled-components';
import { theme } from 'Shared';
import GlobalStyles from 'Shared/GlobalStyle';
// router components
import Home from 'components/Home';
import Search from 'components/Search';
import AddBook from 'components/AddBook';
import MyPage from 'components/MyPage';

const App = () => {
  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/my-page" component={MyPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
