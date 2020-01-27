import React from 'react';
import { theme, Button } from 'components/atoms';
import { MdCheck } from 'react-icons/md';

const LikeButton = ({ handleLike, likeStatus }) => {
  if (likeStatus === true) {
    return (
      <Button
        className="grey stretch large"
        onClick={handleLike}
        style={{ verticalAlign: 'middle' }}
      >
        <MdCheck
          style={{
            verticalAlign: 'middle',
            color: theme.success,
            marginRight: theme.xxsmall,
          }}
        />
        LIKE
      </Button>
    );
  } else {
    return (
      <Button className="grey stretch large" onClick={handleLike}>
        LIKE
      </Button>
    );
  }
};

export default LikeButton;
