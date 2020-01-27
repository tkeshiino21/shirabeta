import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ShouldLoading from 'components/molecules/ShouldLoading';
import LikeButton from 'components/molecules/LikeButton';
import FormComment from 'containers/templates/FormComment';
import BookDetail from 'components/organisms/BookDetail';
import noimage from 'images/noimage.png';
import { theme, Card, Spacing, Container, Snackbar } from 'components/atoms';
import FetchedComments from 'containers/templates/FetchedComments';
import LayoutWithImage from '../organisms/LayoutWithImage';
import BorrowButton from 'components/molecules/BorrowButton';

const FetchedDetail = ({
  userData,
  onBorrow,
  onLike,
  onRequest,
  isLoading,
  isAdding,
  fetchedDetail,
  collation,
  showSnack,
}) => {
  const ISBN = useParams().id;
  const history = useHistory();
  const handleBorrow = () => {
    onBorrow(ISBN, fetchedDetail.title, userData.uid);
    history.push('/my-page');
  };
  const handleLike = () => {
    if (collation.myLikes === false) {
      onLike(ISBN, userData.uid, 'likeAdd');
    } else {
      onLike(ISBN, userData.uid, 'likeRemove');
    }
  };
  useEffect(() => onRequest(ISBN, userData.uid), [
    ISBN,
    onRequest,
    userData.uid,
  ]);

  return (
    <ShouldLoading isLoading={isLoading}>
      <LayoutWithImage
        image={
          fetchedDetail === undefined || fetchedDetail.image === ''
            ? noimage
            : fetchedDetail.image
        }
      >
        <Card style={{ width: '100%' }}>
          <Container padding={`${theme.xxlarge} ${theme.xlarge}`}>
            <BookDetail
              fetchedDetail={fetchedDetail}
              collation={collation}
              counts={{
                likesCount: fetchedDetail.likesCount,
                commentsCount: fetchedDetail.commentsCount,
              }}
            />
            <Spacing mTop={theme.small}>
              <LikeButton
                handleLike={handleLike}
                likeStatus={collation.myLikes}
              />
            </Spacing>
            <Spacing mTop={theme.small}>
              <BorrowButton
                borrowing={fetchedDetail.borrowing}
                handleBorrow={handleBorrow}
              />
            </Spacing>
            <Spacing mTop={theme.small}>
              <ShouldLoading isLoading={isAdding}>
                <FetchedComments ISBN={fetchedDetail.ISBN} />
              </ShouldLoading>
            </Spacing>
            <Spacing mTop={theme.xlarge}>
              <FormComment fetchedDetail={fetchedDetail} userData={userData} />
            </Spacing>
          </Container>
          <Snackbar className={showSnack === true ? 'show' : 'hidden'}>
            Successfully commented!
          </Snackbar>
        </Card>
      </LayoutWithImage>
    </ShouldLoading>
  );
};

export default FetchedDetail;
