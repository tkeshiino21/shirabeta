import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { theme, Text } from 'components/atoms';

const CounterLikes = ({ onClick }) => {
  return (
    <Text as="button" onClick={onClick} color={theme.naturalDark}>
      <MdFavorite
        style={{ verticalAlign: 'middle', marginRight: theme.xxsmall }}
      />
      <span style={{ verticalAlign: 'middle' }}>お気に入りに登録</span>
    </Text>
  );
};

export default CounterLikes;
