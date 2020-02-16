import React, { FC, useEffect } from 'react';
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

type Props = {
  userData: { uid: string; userName: string };
  onBorrow: (ISBN: string, title: string, uid: string) => void;
  onLike: (ISBN: string, uid: string, isLike: string) => void;
  onRequest: (ISBN: string, uid: string) => void;
  isLoading: boolean;
  isAdding: boolean;
  fetchedDetail: {
    title: string;
    author: [];
    publishedDate: string;
    category: string;
    description: string;
    image: string;
    borrowing: boolean;
    ISBN: string;
    likesCount: number;
    commentsCount: number;
  };
  collation: { myLikes: boolean; myComments: boolean };
  showSnack: boolean;
};

type RouterParams = {
  id: string;
};

const FetchedDetail: FC<Props> = ({
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
  const ISBN = useParams<RouterParams>().id;
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
              fetchedDetail={{
                title: fetchedDetail.title,
                author: fetchedDetail.author,
                publishedDate: fetchedDetail.publishedDate,
                category: fetchedDetail.category,
                description: fetchedDetail.description,
              }}
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
