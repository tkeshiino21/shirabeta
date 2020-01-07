import React, { useState } from 'react';
import styled from 'styled-components';
import { MdTrendingUp, MdFlag } from 'react-icons/md';
import { media, theme, Container, Button } from 'Shared';

const MenuButton = styled(Button)`
  border: none;
  padding: 5px;
  padding-left: 15px;
  margin-top: 5px;
  text-align: left;

  &:active {
    background-color: ${theme.primary};
  }
`;

const listItems = [
  {
    name: 'trends',
    label: 'トレンド',
    icon: MdTrendingUp,
  },
  {
    name: 'milestones',
    label: '定番',
    icon: MdFlag,
  },
];

const ResponsiveContainer = styled(Container)`
  height: 80px;
  width: 165px;
  ${media.md`
      width: 100%;
    `}
`;

const MenuLinks = () => {
  const [activeMenu, setActiveMenu] = useState('milestones');
  const onClickHandler = e => {
    setActiveMenu(e.target.value);
  };

  return (
    <ResponsiveContainer className="vertical">
      {listItems.map(listItem => {
        return (
          <MenuButton
            key={listItem.name}
            value={listItem.name}
            className={listItem.name === activeMenu ? 'primary' : 'text'}
            style={{ width: '100%' }}
            onClick={onClickHandler}
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
