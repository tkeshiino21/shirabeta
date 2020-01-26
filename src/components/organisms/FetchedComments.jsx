import React, { useEffect } from 'react';
import { theme, Spacing, Text } from 'components/atoms';
import ShouldLoading from 'components/molecules/ShouldLoading';

const FetchedComments = ({ ISBN, onCommentRequest, isFetching, comments }) => {
  useEffect(() => onCommentRequest(ISBN), [ISBN, onCommentRequest]);
  return (
    <ShouldLoading isLoading={isFetching}>
      <>
        {comments === null
          ? null
          : comments.map(comme => (
              <li key={comme.userName}>
                <Spacing mTop={theme.xlarge} />
                <Text className="body2" as="h5">
                  {comme.comment}
                </Text>
                <div>
                  <Text
                    className="caption"
                    as="h5"
                    color={theme.naturalDark}
                    style={{ marginRight: theme.small }}
                  >
                    {comme.userName}
                  </Text>
                  <Text className="caption" as="h5" color={theme.naturalDark}>
                    {comme.commentDate}
                  </Text>
                </div>
              </li>
            ))}
      </>
    </ShouldLoading>
  );
};

export default FetchedComments;
