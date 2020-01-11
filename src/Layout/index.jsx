import React from 'react';
import { MainWrapper, Spacing, Container } from 'Shared';
import Header from 'Layout/Header';
import Footer from 'Layout/Footer/index';

const Layout = ({ children }) => {
  return (
    <>
      <Container className="vertical" align="center" height="100%">
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Spacing pBottom="150px" />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
