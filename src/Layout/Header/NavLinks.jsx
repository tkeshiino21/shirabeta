import React from 'react';
import { MdHome, MdControlPoint, MdEventNote } from 'react-icons/md';
import { theme, Border } from 'shared';
import { MyNavLink, NavMenu } from 'layout/Header/Style';

const NavLinks = () => {
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
            <MyNavLink
              className="navItem"
              exact
              activeStyle={{ color: theme.naturalDark }}
              to={navItem.link}
            >
              {navItem.value}
            </MyNavLink>
            <Border bottom="1px" color={navItem.border} />
          </li>
        );
      })}
    </NavMenu>
  );
};

export default NavLinks;
