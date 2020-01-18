import React from 'react';
import { StyledTableRow, StyledTableCell } from 'Shared/Table';
import { Button } from 'Shared';

const BorrowData = ({ borrowData, onReturn, onRequest, uid }) => {
  return borrowData === null
    ? null
    : borrowData.map(doc => {
        return (
          <StyledTableRow key={doc.title}>
            <StyledTableCell className="title" component="th" scope="row">
              {doc.title}
            </StyledTableCell>

            <StyledTableCell align="right">{doc.borrowDate}</StyledTableCell>
            <StyledTableCell align="right">{doc.limitDate}</StyledTableCell>
            <StyledTableCell align="right">{doc.returnDate}</StyledTableCell>
            <StyledTableCell align="right">
              <Button
                disabled={doc.returnDate === undefined ? false : true}
                onClick={() => {
                  onReturn(doc.ISBN, uid);
                  onRequest(uid);
                }}
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
      });
};

export default BorrowData;
