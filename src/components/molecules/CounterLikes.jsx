import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { theme, Text } from 'components/atoms';

const CounterLikes = ({ likesCount }) => {
  return (
    <Text color={theme.naturalDark}>
      <MdFavorite
        style={{ verticalAlign: 'middle', marginRight: theme.xxsmall }}
      />
      <span style={{ verticalAlign: 'middle' }}>{likesCount}</span>
    </Text>
  );
};

export default CounterLikes;
