import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledTableRow,
  StyledTableCell,
  Table,
  TableHead,
  TableBody,
  TableRow,
} from 'components/atoms/Table';
import { Button, Loader } from 'components/atoms';
import ShouldLoading from 'components/molecules/ShouldLoading';

const MyBorrowData = ({ uid, onRequest, isLoading, borrowData, onReturn }) => {
  useEffect(() => {
    onRequest(uid);
  }, [uid, onRequest, onReturn]);
  const BorrowDataMapping = () => {
    return borrowData === undefined
      ? null
      : borrowData.map(snapshot => {
          const data = snapshot.data();

          return (
            <StyledTableRow key={data.ISBN}>
              <StyledTableCell
                className="title"
                as={Link}
                to={`/library/${data.ISBN}`}
              >
                {data.title}
              </StyledTableCell>
              <StyledTableCell className="collapse" align="right">
                {data.borrowDate}
              </StyledTableCell>
              <StyledTableCell align="right">{data.limitDate}</StyledTableCell>
              <StyledTableCell className="collapse" align="right">
                {data.returnDate}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  disabled={data.returnDate !== ''}
                  onClick={() => {
                    onReturn(data.ISBN, uid);
                  }}
                  className="primary"
                  style={{
                    display: data.returnDate === '' ? 'primary' : 'none',
                  }}
                >
                  返却
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          );
        });
  };

  if (isLoading !== false) {
    return <Loader />;
  }

  return borrowData === null ? (
    <h1>貸出履歴なし</h1>
  ) : (
    <ShouldLoading isLoading={isLoading}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>本のタイトル</StyledTableCell>
            <StyledTableCell className="collapse" align="right">
              貸出日
            </StyledTableCell>
            <StyledTableCell align="right">期限日</StyledTableCell>
            <StyledTableCell className="collapse" align="right">
              返却日
            </StyledTableCell>
            <StyledTableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          <BorrowDataMapping />
        </TableBody>
      </Table>
    </ShouldLoading>
  );
};

export default MyBorrowData;
