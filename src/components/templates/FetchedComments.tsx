import React, { FC, useEffect } from 'react';
import { theme, Spacing, Text } from 'components/atoms';
import ShouldLoading from 'components/molecules/ShouldLoading';

type Props = {
  ISBN: string;
  onCommentRequest: (arg0: string) => void;
  isFetching: boolean;
  comments: [{ userName: any; comment: any; commentDate: string }];
};

const FetchedComments: FC<Props> = ({
  ISBN,
  onCommentRequest,
  isFetching,
  comments,
}) => {
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
