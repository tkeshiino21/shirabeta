import React from 'react';
import { MdHome } from 'react-icons/md';
import { theme, Border } from 'Shared';
import { NavLink, NavMenu } from 'Layout/Header/HeaderStyle';

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
