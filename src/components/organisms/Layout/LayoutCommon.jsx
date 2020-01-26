import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Block, Spacing, Container } from 'components/atoms';
import Header from 'components/organisms/Layout/Header';
import Footer from 'components/organisms/Layout/Footer';
import LandingView from 'containers/organisms/LandingView';
import MainWrapper from 'components/molecules/MainWrapper';

const LayoutCommon = ({ children }) => {
  return (
    <>
      <Header />
      <Spacing mTop="40px" />
      {useLocation().pathname === '/' ? (
        <>
          <LandingView />
        </>
      ) : null}
      <Box className="vertical">
        <Spacing mTop="40px" />
        <Box justify="center" minHeight="50vh">
          <MainWrapper>{children}</MainWrapper>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LayoutCommon;
