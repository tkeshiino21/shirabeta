import React, { useState } from 'react';
import { theme, Spacing, Label, Button, Box, Input } from 'components/atoms';

const FormISBN = ({ ISBNSearch }) => {
  const [ISBN, setISBN] = useState('');
  const handleChange = e => setISBN(e.target.value);
  const handleClick = () => ISBNSearch(ISBN);

  return (
    <div>
      <Box className="vertical wrap">
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
