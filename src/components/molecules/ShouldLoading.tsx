import React, { FC } from 'react';
import { Loader } from 'components/atoms';

type Props = {
  isLoading: boolean | '';
  children: any;
};

const ShouldLoading: FC<Props> = ({ isLoading, children }) => {
  if (isLoading !== false) {
    return <Loader />;
  }

  return children;
};

export default ShouldLoading;
