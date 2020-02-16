import React, { FC, ChangeEvent, ReactElement } from 'react';
import SubMenu from 'components/molecules/SubMenu';
import { Box, theme, Spacing } from 'components/atoms';
import LayoutCommon from 'components/organisms/LayoutCommon';
import { IconType } from 'react-icons/lib/cjs';

type Props = {
  name: string;
  icon: IconType;
};
type LayoutWithSubMenuProps = {
  children: ReactElement;
  listItems: Props[];
  menuHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  activeMenu: string;
};

const LayoutWithSubMenu: FC<LayoutWithSubMenuProps> = ({
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
