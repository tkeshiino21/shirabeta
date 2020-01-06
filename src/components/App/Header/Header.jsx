import React, { useState } from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import {
  theme,
  MainWrapper,
  Container,
  Text,
  Button,
  LinkButton,
} from '../../../shared';
import NavLinks from './NavLinks';

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100vw;
  align-items: end;
  background-color: ${theme.primary};
`;

const BackDrop = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <MainWrapper>
        <Container align="center" style={{ height: '40px' }}>
          <MdMenu
            style={{
              color: theme.secondary,
              fontWeight: 'bold',
              fontSize: theme.large,
              marginRight: theme.large,
              cursor: 'pointer',
            }}
            onClick={onClickHandler}
          />
          {isOpen ? <NavLinks /> : null}
          {isOpen ? <BackDrop onClick={onClickHandler} /> : null}
          <Text as="h1" fs={theme.medium} color={theme.light}>
            <LinkButton to="/">Livrio</LinkButton>
          </Text>
          <Container
            justify="flex-end"
            align="center"
            style={{ height: '40px' }}
            width="100%"
          >
            <Button
              className="primary"
              mRight={theme.small}
              style={{ padding: '5px 10px' }}
            >
              Signup
            </Button>
            <Button className="text" color={theme.light} mRight={theme.small}>
              Login
            </Button>
            <Button className="text" color={theme.light} mRight={theme.small}>
              Logout
            </Button>
          </Container>
        </Container>
      </MainWrapper>
    </HeaderContainer>
  );
};

export default Header;
