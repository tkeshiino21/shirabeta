import React, { FC, ReactNode } from 'react';
import { Box, Wrapper } from 'components/atoms';

type Props = {
  children: ReactNode;
};

const MainWrapper: FC<Props> = ({ children }) => {
  return (
    <Wrapper height="inherit">
      <Box width="95vw" maxWidth="1080px">
        {children}
      </Box>
    </Wrapper>
  );
};

export default MainWrapper;
