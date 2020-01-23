import React from 'react';
import { Loader } from 'components/atoms';

const NowOnLoading = ({ isLoading, children }) => {
  return isLoading === false ? <>{children}</> : <Loader />;
};

export default NowOnLoading;
