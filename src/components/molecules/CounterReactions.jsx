import React from 'react';
import { MdFavorite, MdComment } from 'react-icons/md';
import { Box, Text, Spacing, theme } from 'components/atoms';

const CounterReactions = ({ reactions, counts }) => {
  const myLikes = reactions.myLikes;
  const myComments = reactions.myComments;
  return (
    <Box>
      <Text
        className="outline"
        as="p"
        color={myLikes === true ? theme.primary : theme.naturalDark}
        style={{ cursor: 'pointer' }}
      >
        <MdFavorite style={{ verticalAlign: 'middle', marginRight: '1px' }} />
        <span style={{ verticalAlign: 'middle' }}>{counts.likesCount}</span>
      </Text>
      <Spacing mRight="6px" />
      <Text
        className="outline"
        as="p"
        color={myComments === true ? theme.primary : theme.naturalDark}
      >
        <MdComment style={{ verticalAlign: 'middle', marginRight: '1px' }} />
        <span style={{ verticalAlign: 'middle' }}> {counts.commentsCount}</span>
      </Text>
    </Box>
  );
};

export default CounterReactions;
