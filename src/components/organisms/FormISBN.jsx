import React, { useState, useMemo } from 'react';
import {
  theme,
  Container,
  Spacing,
  Loader,
  Label,
  Block,
} from 'components/atoms';
import { Button, Box, Snackbar, Image, Input } from 'components/atoms';

const FormISBN = ({ ISBNSearch }) => {
  const [ISBN, setISBN] = useState('');
  const handleChange = e => setISBN(e.target.value);
  const handleClick = () => ISBNSearch(ISBN);
  return (
    <div>
      <Box className="wrap" className="vertical">
        <Box>
          <Label style={{ width: '90px' }}>ISBN</Label>
          <Input
            value={ISBN}
            className="outlined"
            onChange={handleChange}
            style={{ height: '24px' }}
          />
        </Box>
        <Spacing mTop={theme.medium} />
        <Button className="secondary stretch large" onClick={handleClick}>
          検索
        </Button>
        <Spacing mTop={theme.xlarge} />
      </Box>
    </div>
  );
};

export default FormISBN;
