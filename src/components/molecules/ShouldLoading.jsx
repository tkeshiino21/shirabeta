import React from 'react';
import { Loader } from 'components/atoms';

const ShouldLoading = ({ isLoading, children }) => {
  if (isLoading !== false) {
    return <Loader />;
  }

  return children;
};

export default ShouldLoading;
