import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdControlPoint, MdEventNote } from 'react-icons/md';
import styled from 'styled-components';
import { theme, Divider, Text, Container } from 'components/atoms';

const NavMenu = styled.div`
  position: absolute;
  top: 40px;
  width: 160px;
  background: white;
  z-index: 1500;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);
`;

const Menu = () => {
  const navItems = [
    {
      value: 'home',
      link: '/',
      icon: MdHome,
      border: theme.light,
    },
    {
      value: 'BookRegister',
      link: '/book-register',
      icon: MdControlPoint,
      border: theme.light,
    },
    {
      value: 'MyPage',
      link: '/my-page',
      icon: MdEventNote,
      border: theme.light,
    },
  ];

  return (
    <NavMenu>
      <Container padding={`${theme.small} ${theme.small}`}>
        {navItems.map(navItem => {
          return (
            <li key={navItem.link}>
              <Text
                className="body1"
                color={theme.secondary}
                as={NavLink}
                exact
                activeStyle={{ color: theme.naturalDark, cursor: 'default' }}
                to={navItem.link}
              >
                {navItem.value}
              </Text>
              <Divider color={navItem.border} />
            </li>
          );
        })}
      </Container>
    </NavMenu>
  );
};

export default Menu;
