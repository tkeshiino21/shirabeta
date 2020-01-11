import React, { useState } from 'react';
import {
  theme,
  MainWrapper,
  Container,
  Text,
  Button,
  LinkButton,
  Spacing,
  Strong,
} from 'Shared';
import {
  HeaderContainer,
  BackDrop,
  Menu,
  AuthButtonContainer,
} from 'Layout/Header/HeaderStyle';
import NavLinks from 'Layout/Header/NavLinks';

const Header = () => {
  const [auth, setAuth] = useState({
    uid: false,
    name: 'hogefuga',
  });
  const handleClick = () => {
    return setAuth({ ...auth, uid: !auth.uid });
  };

  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <MainWrapper>
        <Container align="center">
          <Menu onClick={onClickHandler} />
          {isOpen ? <NavLinks /> : null}
          {isOpen ? <BackDrop onClick={onClickHandler} /> : null}
          <Text as="h1" fs={theme.medium} color={theme.light}>
            <LinkButton to="/">Livrio</LinkButton>
          </Text>
          <AuthButtonContainer>
            {!auth.uid ? (
              <>
                <Button
                  className="primary"
                  style={{ padding: '5px 10px' }}
                  onClick={handleClick}
                >
                  Signup
                </Button>
                <Spacing mRight={theme.small} />
                <Button
                  className="text"
                  color={theme.light}
                  mRight={theme.small}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <Text color={theme.light} fs={theme.small}>
                  ようこそ<Strong fs={theme.medium}> {auth.name} </Strong> さん
                </Text>
                <Spacing mRight={theme.small} />
                <Button
                  className="text"
                  color={theme.light}
                  mRight={theme.small}
                >
                  Logout
                </Button>
              </>
            )}
          </AuthButtonContainer>
        </Container>
      </MainWrapper>
    </HeaderContainer>
  );
};

export default Header;
