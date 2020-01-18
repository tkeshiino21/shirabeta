import React, { useState } from 'react';
import { theme, MainWrapper, Container, Text, LinkButton } from 'Shared';
import {
  HeaderContainer,
  BackDrop,
  Menu,
  AuthButtonContainer,
} from 'Layout/Header/Style';
import NavLinks from 'Layout/Header/NavLinks';
import AuthStateNav from 'containers/AuthStateNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClickHandler = () => {
    return setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <MainWrapper>
        <Container align="center">
          <Menu onClick={onClickHandler} />
          {isMenuOpen ? <NavLinks /> : null}
          {isMenuOpen ? <BackDrop onClick={onClickHandler} /> : null}
          <Text as="h1" fs={theme.medium} color={theme.light}>
            <LinkButton to="/">Livrio</LinkButton>
          </Text>
          <AuthButtonContainer>
            <AuthStateNav />
          </AuthButtonContainer>
        </Container>
      </MainWrapper>
    </HeaderContainer>
  );
};

export default Header;
