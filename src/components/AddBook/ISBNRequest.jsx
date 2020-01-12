import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { theme, Border, Text, Container, Card, Spacing } from 'Shared';

// ISBN CODE FOR TESTING
// 9784873115658

const ISBNRequest = ({ onRequest, fetchedBook }) => {
  const [ISBN, setISBN] = useState('');
  const handleChange = e => {
    return setISBN(e.target.value);
  };

  return (
    <Card width="auto">
      <Container className="vertical" align="center">
        <Container className="horizontal" height="auto">
          <Spacing mRight={theme.small} />
          <label htmlFor="isbn">ISBN</label>
          <div style={{ dispaly: 'inline' }}>
            <input id="isbn" type="text" onChange={handleChange} value={ISBN} />
            <Border bottom="1px" color="#aaaaaa" width="160px" />
            <button onClick={() => onRequest(ISBN)}>SEARCH</button>
          </div>
        </Container>
        <Spacing mTop="20px" />
      </Container>
    </Card>
  );
};

export default ISBNRequest;
