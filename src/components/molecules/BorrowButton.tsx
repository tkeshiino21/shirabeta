import React, { FC } from 'react';
import { Button } from 'components/atoms';

type Props = {
  handleBorrow: () => void;
  borrowing: boolean;
};

const BorrowButton: FC<Props> = ({ handleBorrow, borrowing }) => {
  if (borrowing === true) {
    return (
      <Button className="text stretch large" onClick={handleBorrow}>
        貸出中
      </Button>
    );
  } else {
    return (
      <Button className="secondary stretch large" onClick={handleBorrow}>
        BORROW
      </Button>
    );
  }
};

export default BorrowButton;
