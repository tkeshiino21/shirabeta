import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// for style
import { ThemeProvider } from 'styled-components';
import { theme } from './shared';
import GlobalStyle from './shared/GlobalStyle';
// router components
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import AddBook from './containers/AddBook';

const App = () => {
  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/add-book" component={AddBook} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
