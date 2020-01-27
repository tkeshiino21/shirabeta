import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme, Box, Text, Spacing } from 'components/atoms';
import MenuWithHamburger from 'components/molecules/MenuWithHamburger';
import MainWrapper from 'components/molecules/MainWrapper';
import HeaderAuth from 'containers/organisms/HeaderAuth';

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100vw;
  z-index: 1500;
  background-color: ${theme.primary};
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <MainWrapper>
        <Box width="auto" align="center">
          <MenuWithHamburger />
          <Spacing mRight={theme.small} />
          <Text
            as={Link}
            className="h4"
            color={theme.secondary}
            to="/"
            style={
              location.pathname === '/'
                ? { cursor: 'default' }
                : { cursor: 'pointer' }
            }
          >
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
