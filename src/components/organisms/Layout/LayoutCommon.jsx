import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Block, Spacing, Container } from 'components/atoms';
import Header from 'components/organisms/Layout/Header';
import Footer from 'components/organisms/Layout/Footer';
import LandingView from 'components/organisms/LandingView';
import MainWrapper from 'components/molecules/MainWrapper';

const LayoutCommon = ({ children }) => {
  return (
    <>
      {console.log(useLocation())}
      <Header />
      {useLocation().pathname === '/' ? (
        <>
          <Spacing mTop="40px" />
          <LandingView />
        </>
      ) : null}
      <Spacing mTop="40px" />
      <Box justify="center">
        <MainWrapper>{children}</MainWrapper>
      </Box>
      <Footer />
    </>
  );
};

export default LayoutCommon;
