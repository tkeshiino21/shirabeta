import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdControlPoint, MdEventNote } from 'react-icons/md';
import styled from 'styled-components';
import { theme, Divider } from 'components/atoms';

const CustomNavLink = styled(NavLink)`
  color: ${theme.secondary};
  margin: 0 ${theme.large};
  line-height: 2.5;
  :hover {
    text-decoration-color: ${theme.secondary};
  }
`;

const NavMenu = styled.div`
  position: absolute;
  top: 35px;
  width: 200px;
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
      border: theme.naturalDark,
    },
    {
      value: 'BookRegister',
      link: '/book-register',
      icon: MdControlPoint,
      border: theme.naturalDark,
    },
    {
      value: 'MyPage',
      link: '/my-page',
      icon: MdEventNote,
      border: 'inherit',
    },
  ];
  return (
    <NavMenu>
      {navItems.map(navItem => {
        return (
          <li key={navItem.link}>
            <CustomNavLink
              exact
              activeStyle={{ color: theme.naturalDark }}
              to={navItem.link}
            >
              {navItem.value}
            </CustomNavLink>
            <Divider bottom="1px" color={navItem.border} />
          </li>
        );
      })}
    </NavMenu>
  );
};

export default Menu;
