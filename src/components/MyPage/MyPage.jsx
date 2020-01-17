import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { listItems } from 'components/MyPage/listItems';
import SubMenuLayout from 'components/Layout/SubMenu/SubMenuLayout';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  StyledTableRow,
  StyledTableCell,
} from 'Shared/Table';
import { theme, Button, Spacing } from 'Shared';

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
  const FetchedBorrowData = () => {
    return borrowData === ''
      ? null
      : borrowData.docs
          .map(queryDocumentSnapshot => {
            console.log(queryDocumentSnapshot);
            return queryDocumentSnapshot.data();
          })
          .map((doc, id, index) => {
            return (
              <StyledTableRow key={doc.title}>
                <StyledTableCell className="title" component="th" scope="row">
                  {doc.title}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {doc.borrowDate}
                </StyledTableCell>
                <StyledTableCell align="right">{doc.limitDate}</StyledTableCell>
                <StyledTableCell align="right">
                  {doc.returnDate}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    disabled={doc.returnDate === undefined ? false : true}
                    onClick={() => {
                      onReturn(doc.ISBN, uid);
                      onRequest(uid);
                    }}
                    className=" primary"
                    style={{
                      display:
                        doc.returnDate === undefined ? ' primary' : 'none',
                    }}
                  >
                    返却
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            );
          });
  };
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
          <FetchedBorrowData />
        </TableBody>
      </Table>
    </SubMenuLayout>
  );
};

export default MyPage;
