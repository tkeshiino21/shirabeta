import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdHome } from 'react-icons/md';
import { theme, Border } from '../../../shared';

const NavLink = styled(Link)`
  color: ${theme.secondary};
  margin: 0 ${theme.large};
  &.navItem {
    line-height: 2.5;
  }
`;

const NavMenu = styled.div`
  position: absolute;
  top: 35px;
  width: 200px;
  background: white;
  z-index: 1;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);
`;

const NavLinks = () => {
  const navItems = [
    {
      value: 'home',
      label: 'ホーム',
      link: '/',
      icon: MdHome,
      border: theme.naturalDark,
    },
    {
      value: 'search',
      label: '図書検索',
      link: '/search',
      border: theme.naturalDark,
    },
    {
      value: 'BookRegister',
      label: '本の登録',
      link: '/add-book',
      border: 'inherit',
    },
  ];

  return (
    <NavMenu>
      {navItems.map(navItem => {
        return (
          <li key={navItem.link}>
            <NavLink className="navItem" to={navItem.link}>
              {navItem.value}
            </NavLink>
            <Border bottom="1px" color={navItem.border} />
          </li>
        );
      })}
    </NavMenu>
  );
};

export default NavLinks;
