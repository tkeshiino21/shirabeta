import React, { useEffect } from 'react';
import {
  StyledTableRow,
  StyledTableCell,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
} from 'components/atoms/Table';
import { Button } from 'components/atoms';
import ShouldLoading from 'components/molecules/ShouldLoading';
import { Loader } from 'components/atoms';

const FetchedBorrowData = ({
  uid,
  onRequest,
  isLoading,
  borrowData,
  onReturn,
}) => {
  useEffect(() => {
    onRequest(uid);
  }, [uid, onRequest, onReturn]);
  const BorrowDataMapping = () => {
    return borrowData === undefined
      ? null
      : borrowData.map(snapshot => {
          console.log('data', snapshot.data());
          const data = snapshot.data();
          return (
            <StyledTableRow key={data.ISBN}>
              <StyledTableCell className="title" component="th" scope="row">
                {data.title}
              </StyledTableCell>
              <StyledTableCell align="right">{data.borrowDate}</StyledTableCell>
              <StyledTableCell align="right">{data.limitDate}</StyledTableCell>
              <StyledTableCell align="right">{data.returnDate}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  disabled={data.returnDate === undefined ? false : true}
                  onClick={() => {
                    onReturn(data.ISBN, uid);
                  }}
                  className="primary"
                  style={{
                    display: data.returnDate === undefined ? 'primary' : 'none',
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
  } else {
    return borrowData === null ? (
      <h1>貸出履歴なし</h1>
    ) : (
      <ShouldLoading isLoading={isLoading}>
        <Table>
          <TableHead>
            <TableRow>
              {console.log('b', borrowData)}
              <StyledTableCell>本のタイトル</StyledTableCell>
              <StyledTableCell align="right">貸出日</StyledTableCell>
              <StyledTableCell align="right">期限日</StyledTableCell>
              <StyledTableCell align="right">返却日</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <BorrowDataMapping />
          </TableBody>
        </Table>
      </ShouldLoading>
    );
  }
};

export default FetchedBorrowData;
