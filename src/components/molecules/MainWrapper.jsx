import React from 'react';
import {
  theme,
  Block,
  Box,
  Container,
  Spacing,
  Wrapper,
} from 'components/atoms';

const MainWrapper = ({ children }) => {
  return (
    <Wrapper height="inherit" style={{ border: '1px solid grey' }}>
      <Box width="95vw" maxWidth="870px" style={{ border: '1px solid grey' }}>
        {children}
      </Box>
    </Wrapper>
  );
};

export default MainWrapper;
