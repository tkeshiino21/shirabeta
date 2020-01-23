import React from 'react';
import { MdFavorite, MdComment } from 'react-icons/md';
import { Box, Text, Spacing, theme } from 'components/atoms';

const CounterReactions = ({ counts }) => {
  return (
    <Box>
      <Text color={theme.naturalDark}>
        <MdFavorite
          style={{ verticalAlign: 'middle', marginRight: theme.xxsmall }}
        />
        <span style={{ verticalAlign: 'middle' }}>{counts.likesCount}</span>
      </Text>
      <Spacing mRight={theme.small} />
      <Text color={theme.naturalDark}>
        <MdComment
          style={{ verticalAlign: 'middle', marginRight: theme.xxsmall }}
        />
        <span style={{ verticalAlign: 'middle' }}> {counts.commentsCount}</span>
      </Text>
    </Box>
  );
};

export default CounterReactions;
