import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// for style
import { ThemeProvider } from 'styled-components';
import { theme } from 'Shared';
import GlobalStyles from 'Shared/GlobalStyle';
// router components
import HomePage from 'components/pages/Home';
import SearchPage from 'components/pages/Search';
import AddBook from 'components/pages/AddBook';

const App = () => {
  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyles />
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
