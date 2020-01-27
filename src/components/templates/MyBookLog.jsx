import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme, Text, Spacing } from 'components/atoms';
import ShouldLoading from 'components/molecules/ShouldLoading';

const MyBookLog = ({
  uid,
  ISBNS,
  onUserLikes,
  onUserComments,
  isLoading,
  userLikes,
  userComments,
}) => {
  useEffect(() => onUserComments(uid), [uid, onUserComments]);
  useEffect(() => onUserLikes(ISBNS), [ISBNS, onUserLikes]);

  return (
    <ShouldLoading isLoading={isLoading}>
      <>
        <Text className="h6" as="h2">
          お気に入り
        </Text>
        {userLikes === ''
          ? null
          : userLikes.map(documentSnapshot => {
              const bookData = documentSnapshot.data();
              return (
                <div key={bookData.ISBN}>
                  <Spacing mTop={theme.small} />
                  <Text
                    className="body1 link"
                    as={Link}
                    to={`/library/${bookData.ISBN}`}
                  >
                    {bookData.title}
                  </Text>
                  {bookData.borrowing === true ? (
                    <Text className="caption" as="p" color={theme.naturalDark}>
                      &emsp;貸出中
                    </Text>
                  ) : (
                    <Text className="caption" as="p" color={theme.primary}>
                      &emsp;貸出可能
                    </Text>
                  )}
                </div>
              );
            })}
        <Spacing mTop={theme.xlarge} />
        <Text className="h6" as="h2">
          コメント履歴
        </Text>
        {userComments === ''
          ? null
          : userComments.map(documentSnapshot => {
              const commentData = documentSnapshot.data();

              return (
                <li key={commentData.ISBN}>
                  <Spacing mTop={theme.medium} />
                  <div>
                    <Text
                      className="body1 link"
                      as={Link}
                      to={`/library/${commentData.ISBN}`}
                    >
                      {commentData.title}
                    </Text>
                  </div>
                  <div>
                    <Text className="body2" as="h5">
                      {commentData.comment}
                    </Text>
                  </div>
                  <Text className="caption" as="h5" color={theme.naturalDark}>
                    {commentData.commentDate}
                  </Text>
                </li>
              );
            })}
      </>
    </ShouldLoading>
  );
};

export default MyBookLog;
