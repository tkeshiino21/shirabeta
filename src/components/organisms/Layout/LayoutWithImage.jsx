import React from 'react';
import { Box, Image } from 'components/atoms';
import { LayoutCommon } from 'components/organisms/Layout/LayoutCommon';

const LayoutWithImage = ({ children, image }) => {
  return (
    <LayoutCommon>
      <Box>
        <Image src={image} minWidth="320px" maxWidth="500px" />
        <Box className="grow wrap">{children}</Box>
      </Box>
    </LayoutCommon>
  );
};

export default LayoutWithImage;
