import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { theme, Text } from 'components/atoms';

const CommentOpen = ({ handleClick }) => {
  return (
    <Text as="button" onClick={handleClick} color={theme.naturalDark}>
      <MdModeEdit
        style={{
          verticalAlign: 'middle',
        }}
      />
      <span
        style={{
          verticalAlign: 'middle',
        }}
      >
        コメントを書く
      </span>
    </Text>
  );
};

export default CommentOpen;
