import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme, Text, Spacing } from 'components/atoms';
import ShouldLoading from 'components/molecules/ShouldLoading';

const BookLog = ({
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
              const borrowStatus =
                bookData.borrowing === true ? (
                  <Text className="caption" as="p" color={theme.naturalDark}>
                    　貸出中
                  </Text>
                ) : (
                  <Text className="caption" as="p" color={theme.primary}>
                    　貸出可能
                  </Text>
                );
              return (
                <div key={bookData.ISBN}>
                  <Spacing mTop={theme.medium} />
                  <Text
                    className="body2"
                    as={Link}
                    to={`/library/${bookData.ISBN}`}
                  >
                    {bookData.title}
                  </Text>
                  <Text className="caption" as="p" color={theme.naturalDark}>
                    　　{borrowStatus}
                  </Text>
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
                    <Text className="body2" as="h5">
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

export default BookLog;
