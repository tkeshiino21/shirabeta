import React, { FC, ChangeEvent, useState } from 'react';
import { theme, Spacing, Label, Button, Box, Input } from 'components/atoms';

type Props = {
  ISBNSearch: (ISBN: string) => void;
};

const FormISBN: FC<Props> = ({ ISBNSearch }) => {
  const [ISBN, setISBN] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setISBN(e.target.value);
  const handleClick = () => ISBNSearch(ISBN);

  return (
    <Box className="vertical">
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
  );
};

export default FormISBN;
