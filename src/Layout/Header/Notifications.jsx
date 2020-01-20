import React from 'react';
import { MdHome } from 'react-icons/md';
import { theme, Border } from 'shared';
import { MyNavLink, NavMenu } from 'layout/Header/Style';

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
      border: theme.naturalDark,
    },
    {
      value: 'MyPage',
      label: '本の登録',
      link: '/my-page',
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
