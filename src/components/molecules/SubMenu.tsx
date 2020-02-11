import React, { FC } from 'react';
import styled from 'styled-components';
import { theme, media, Button, Box } from 'components/atoms';

const MenuButton = styled(Button)`
  border: none;
  padding: 5px;
  padding-left: 15px;
  margin-top: 5px;
  text-align: left;
  width: 100%;
  border-radius: 4px 0px 0px 4px;
  &:active {
    background-color: ${theme.primary};
  }
  ${media.md`
    border-radius: 4px 4px 4px 4px
  `};
`;

const ResponsiveTab = styled(Box)`
  flex-direction: column;
  width: 160px;
  height: 100%;
  ${media.sm`
    flex-direction: row;
    width: 95vw;
    min-width: none;
  `};
`;

type Props = {
  listItems: [{ name: string; icon: any }];
  menuHandler: () => void;
  activeMenu: string;
};

const SubMenu: FC<Props> = ({ listItems, menuHandler, activeMenu }) => {
  return (
    <ResponsiveTab>
      {listItems.map(listItem => {
        return (
          <MenuButton
            key={listItem.name}
            value={listItem.name}
            className={listItem.name === activeMenu ? 'primary' : 'text'}
            style={{ width: '100%', verticalAlign: 'middle' }}
            onClick={menuHandler}
          >
            <listItem.icon
              style={{
                fontSize: '12px',
                display: 'inline',
              }}
            />
            {listItem.name}
          </MenuButton>
        );
      })}
    </ResponsiveTab>
  );
};

export default SubMenu;
