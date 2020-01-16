import React from 'react';
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
} from 'components/MyPage/Style';
import { theme, Button, Spacing } from 'Shared';

const MyPage = ({ authState }) => {
  const createData = (bookTitle, borrowDate, returnDate) => {
    return { bookTitle, borrowDate, returnDate };
  };
  const rows = [
    createData('CSSの教科書', 159, 6.0),
    createData('HTMLの基本', 159, 6.0),
    createData('入門JavaScript', 159, 6.0),
    createData('本格JavaScript', 159, 6.0),
    createData('丸わかりReact', 159, 6.0),
  ];
  if (authState !== true) {
    return <Redirect to={{ pathname: 'login', state: 'MyPage' }} />;
  }
  return (
    <SubMenuLayout listItems={listItems}>
      <Spacing mTop={theme.xlarge} />
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>本のタイトル</StyledTableCell>
            <StyledTableCell align="right">貸出日</StyledTableCell>
            <StyledTableCell align="right">返却日</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.bookTitle}>
              <StyledTableCell component="th" scope="row">
                {row.bookTitle}
              </StyledTableCell>
              <StyledTableCell align="right">{row.borrowDate}</StyledTableCell>
              <StyledTableCell align="right">{row.returnDate}</StyledTableCell>
              <StyledTableCell align="right">
                <Button className="primary">返す</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </SubMenuLayout>
  );
};

export default MyPage;
