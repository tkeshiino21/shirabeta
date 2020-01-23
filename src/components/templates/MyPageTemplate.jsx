import React, { useState } from 'react';
import { MdSearch, MdBook } from 'react-icons/md';
import LayoutWithSubMenu from 'components/organisms/Layout/LayoutWithSubMenu';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  StyledTableCell,
} from 'components/atoms/Table';
import { theme, Spacing } from 'components/atoms';

const MyPageTemplates = ({ children }) => {
  const listItems = [
    {
      name: 'qiita',
      label: 'qiita',
      icon: MdSearch,
    },
    {
      name: 'library',
      label: 'ライブラリ',
      icon: MdBook,
    },
  ];
  const [activeMenu, setActiveMenu] = useState(listItems[1].name);
  const menuHandler = e => {
    setActiveMenu(e.target.value);
  };
  return (
    <LayoutWithSubMenu activeMenu={activeMenu} menuHandler={menuHandler}>
      <Spacing mTop={theme.xlarge} />
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>本のタイトル</StyledTableCell>
            <StyledTableCell align="right">貸出日</StyledTableCell>
            <StyledTableCell align="right">期限日</StyledTableCell>
            <StyledTableCell align="right">返却日</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </LayoutWithSubMenu>
  );
};

export default MyPageTemplates;
