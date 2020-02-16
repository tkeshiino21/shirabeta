import React, { FC } from 'react';
import LayoutCommon from 'components/organisms/LayoutCommon';
import GoBack from 'components/molecules/GoBack';
import { Box } from 'components/atoms';
import FetchedDetail from 'containers/templates/FetchedDetail';

const LibraryDetail: FC = () => {
  return (
    <LayoutCommon>
      <Box className="vertical">
        <Box>
          <GoBack />
        </Box>
        <FetchedDetail />
      </Box>
    </LayoutCommon>
  );
};

export default LibraryDetail;
