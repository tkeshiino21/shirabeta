import React from 'react';
import { theme, Spacing } from 'Shared';
import {
  ResponsiveContainer,
  MenuButton,
} from 'components/Layout/SubMenu/Style';

const MenuLinks = ({ listItems, menuHandler, activeMenu }) => {
  return (
    <ResponsiveContainer className="vertical" width="auto">
      <Spacing mTop={theme.small} />
      {listItems.map(listItem => {
        return (
          <MenuButton
            key={listItem.name}
            value={listItem.name}
            className={listItem.name === activeMenu ? 'primary' : 'text'}
            style={{ width: '100%' }}
            onClick={menuHandler}
          >
            <listItem.icon style={{ fontSize: '12px', display: 'inline' }} />
            {listItem.name}
          </MenuButton>
        );
      })}
    </ResponsiveContainer>
  );
};

export default MenuLinks;
