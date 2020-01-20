import React from 'react';
import { MainWrapper, Text, Spacing, Container } from 'shared';
import Header from 'layout/Header';
import Footer from 'layout/Footer/index';
import GlobalStyles from 'shared/GlobalStyle';
const Layout = ({ children }) => {
  return (
    <>
      <Container className="vertical" align="center" height="100%">
        <Header />
        <GlobalStyles />
        <Text>helo</Text>
        <Spacing mTop="40px" />
        <MainWrapper>{children}</MainWrapper>
        <Spacing pBottom="150px" />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
