import React from 'react';
import SubMenu from 'components/molecules/SubMenu';
import { Box, theme, Spacing, Container } from 'components/atoms';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';
import LandingView from '../LandingView';

const LayoutWithSubMenu = ({
  children,
  listItems,
  menuHandler,
  activeMenu,
}) => {
  return (
    <LayoutCommon>
      <Spacing mTop={theme.large} />
      <Box className="wrap-sm" style={{ border: '1px solid grey' }}>
        <Box className="vertical" basis="160px">
          <Spacing mTop={theme.small} />
          <SubMenu
            listItems={listItems}
            menuHandler={menuHandler}
            activeMenu={activeMenu}
          />
          <Spacing mBottom={theme.small} />
        </Box>
        <Box grow={1} minWidth="0" style={{ border: '1px solid grey' }}>
          {children}
        </Box>
      </Box>
    </LayoutCommon>
  );
};

export default LayoutWithSubMenu;
