import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme, Box, Text, Spacing } from 'components/atoms';
import MenuWithHamburger from 'components/molecules/MenuWithHamburger';
import MainWrapper from 'components/molecules/MainWrapper';
import HeaderAuth from 'containers/AuthPages/HeaderAuth';

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 40px;
  width: 100vw;
  z-index: 1500;
  background-color: ${theme.primary};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <MainWrapper>
        <Box width="auto" align="center">
          <MenuWithHamburger />
          <Spacing mRight={theme.small} />
          <Text as={Link} className="h5" color={theme.secondary} to="/">
            Livrio
          </Text>
          <Box align="center" justify="flex-end" basis="100%">
            <HeaderAuth />
          </Box>
        </Box>
      </MainWrapper>
    </HeaderContainer>
  );
};

export default Header;
