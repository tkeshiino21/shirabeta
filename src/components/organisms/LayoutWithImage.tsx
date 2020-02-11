import React, { FC } from 'react';
import { Box, Image } from 'components/atoms';

type Props = {
  image: string;
  basis?: string;
};

const LayoutWithImage: FC<Props> = ({ children, image, basis }) => {
  return (
    <Box className="wrap-sm">
      <Image
        basis={basis || '40%'}
        bgSize="contain"
        grow={1}
        image={image}
        height="auto"
        style={{ minHeight: '300px' }}
      />
      <Box grow={1} width="500px">
        {children}
      </Box>
    </Box>
  );
};

export default LayoutWithImage;
