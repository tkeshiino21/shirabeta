import React from 'react';
import { Box, Wrapper } from 'components/atoms';

const MainWrapper = ({ children }) => {
  return (
    <Wrapper height="inherit">
      <Box width="95vw" maxWidth="1080px">
        {children}
      </Box>
    </Wrapper>
  );
};

export default MainWrapper;
