import React from 'react';
import { StyledTableRow, StyledTableCell } from 'components/atoms/Table';
import { Button } from 'components/atoms';
import ShouldLoading from 'components/molecules/ShouldLoading';

const FetchedBorrowData = ({
  uid,
  onRequest,
  isLoading,
  borrowData,
  handleClick,
}) => {
  useEffect(() => {
    onRequest(uid);
  }, [uid, onRequest]);
  return (
    <ShouldLoading isLoading={isLoading}>
      {borrowData.map(doc => {
        return (
          <StyledTableRow key={doc.ISBN}>
            <StyledTableCell className="title" component="th" scope="row">
              {doc.title}
            </StyledTableCell>
            <StyledTableCell align="right">{doc.borrowDate}</StyledTableCell>
            <StyledTableCell align="right">{doc.limitDate}</StyledTableCell>
            <StyledTableCell align="right">{doc.returnDate}</StyledTableCell>
            <StyledTableCell align="right">
              <Button
                disabled={doc.returnDate === undefined ? false : true}
                onClick={handleClick}
                className=" primary"
                style={{
                  display: doc.returnDate === undefined ? ' primary' : 'none',
                }}
              >
                返却
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        );
      })}
    </ShouldLoading>
  );
};

export default FetchedBorrowData;
