import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import { MainWrapper, Spacing, Container } from '../../shared';

const Layout = props => {
  return (
    <>
      <Container className="vertical" align="center" height="100%">
        <Header />
        <MainWrapper>{props}</MainWrapper>
        <Spacing pBottom="150px" />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
