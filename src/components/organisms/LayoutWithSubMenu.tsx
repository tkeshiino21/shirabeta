import React, { FC } from 'react';
import SubMenu from 'components/molecules/SubMenu';
import { Box, theme, Spacing } from 'components/atoms';
import LayoutCommon from 'components/organisms/LayoutCommon';

type Props = {
  children: any;
  listItems: any;
  menuHandler: any;
  activeMenu: string;
};

const LayoutWithSubMenu: FC<Props> = ({
  children,
  listItems,
  menuHandler,
  activeMenu,
}) => {
  return (
    <LayoutCommon>
      <Spacing mTop={theme.large} />
      <Box className="wrap-sm">
        <Box className="vertical" basis="160px">
          <Spacing mTop={theme.small} />
          <SubMenu
            listItems={listItems}
            menuHandler={menuHandler}
            activeMenu={activeMenu}
          />
          <Spacing mBottom={theme.small} />
        </Box>
        <Box grow={1} minWidth="0">
          {children}
        </Box>
      </Box>
    </LayoutCommon>
  );
};

export default LayoutWithSubMenu;
