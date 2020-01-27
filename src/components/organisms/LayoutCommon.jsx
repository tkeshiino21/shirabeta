import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Spacing } from 'components/atoms';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
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
