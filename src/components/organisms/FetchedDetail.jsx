import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ShouldLoading from 'components/molecules/ShouldLoading';
import FormComment from 'containers/organisms/FormComment';
import BookDetail from 'components/molecules/BookDetail';
import noimage from 'images/noimage.png';
import {
  theme,
  Button,
  Card,
  Spacing,
  Container,
  Snackbar,
} from 'components/atoms';
import FetchedComments from 'containers/organisms/FetchedComments';
import LayoutWithImage from './Layout/LayoutWithImage';

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
    onLike(ISBN, userData.uid);
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
            <Spacing mTop={theme.small} />
            <Button className="grey stretch large" onClick={handleLike}>
              LIKE
            </Button>
            <Spacing mTop={theme.small} />
            <Button className="secondary stretch large" onClick={handleBorrow}>
              BORROW
            </Button>
            <Spacing mTop={theme.small} />
            <ShouldLoading isLoading={isAdding}>
              <FetchedComments ISBN={fetchedDetail.ISBN} />
            </ShouldLoading>
            <Spacing mTop={theme.xlarge} />
            <FormComment fetchedDetail={fetchedDetail} userData={userData} />
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
