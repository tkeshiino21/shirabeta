import React, { useState } from 'react';
import {
  theme,
  Border,
  InlineButton,
  Container,
  Card,
  Input,
  Spacing,
} from 'Shared';

// ISBN CODE FOR TESTING
// 9784873115658

const ISBNRequest = ({ onRequest, fetchedBook }) => {
  const [ISBN, setISBN] = useState('');
  const handleChange = e => {
    return setISBN(e.target.value);
  };
  const handleClick = () => {
    onRequest(ISBN);
    setISBN('');
  };

  return (
    <Container className="horizontal" height="auto">
      <label htmlFor="isbn">ISBN</label>
      <Input
        className="outlined"
        id="isbn"
        type="text"
        onChange={handleChange}
        value={ISBN}
        style={{ width: '100%', boxSizing: 'border-box' }}
      />
      <InlineButton onClick={handleClick}>SEARCH</InlineButton>
    </Container>
  );
};

export default ISBNRequest;
