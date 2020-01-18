import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { listItems } from 'components/MyPage/listItems';
import BorrowData from 'components/MyPage/BorrowData';
import SubMenuLayout from 'Layout/SubMenu/SubMenuLayout';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  StyledTableCell,
} from 'Shared/Table';
import { theme, Spacing } from 'Shared';

const MyPage = ({ authState, uid, borrowData, onRequest, onReturn }) => {
  useEffect(
    () => onRequest(uid),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [MyPage],
  );
  const [activeMenu, setActiveMenu] = useState(listItems[1].name);
  const menuHandler = e => {
    setActiveMenu(e.target.value);
  };
  console.log(borrowData);

  if (authState !== true) {
    return <Redirect to={{ pathname: 'login', state: 'MyPage' }} />;
  }

  return (
    <SubMenuLayout
      listItems={listItems}
      activeMenu={activeMenu}
      menuHandler={menuHandler}
    >
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
        <TableBody>
          <BorrowData
            borrowData={borrowData}
            onReturn={onReturn}
            onRequest={onRequest}
            uid={uid}
          />
        </TableBody>
      </Table>
    </SubMenuLayout>
  );
};

export default MyPage;
