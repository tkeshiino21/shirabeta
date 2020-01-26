import React from 'react';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';
import GoBack from 'components/molecules/GoBack';
import { Box } from 'components/atoms';
import FetchedDetail from 'containers/organisms/FetchedDetail';

const LibraryDetail = () => {
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
