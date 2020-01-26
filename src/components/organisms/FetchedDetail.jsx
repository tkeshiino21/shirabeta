import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ShouldLoading from 'components/molecules/ShouldLoading';
import LayoutWithImage from './Layout/LayoutWithImage';
import FormComment from 'containers/organisms/FormComment';
import BookDetail from 'components/molecules/BookDetail';
import bookAndGlasses from 'images/bookAndGlasses.jpg';
import { theme, Button, Card, Spacing, Container } from 'components/atoms';
import FetchedComments from 'containers/organisms/FetchedComments';

const FetchedDetail = ({
  userData,
  onBorrow,
  onLike,
  onRequest,
  isLoading,
  fetchedDetail,
  collation,
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
  useEffect(() => onRequest(ISBN, userData.uid), []);
  return (
    <ShouldLoading isLoading={isLoading}>
      <LayoutWithImage
        image={
          fetchedDetail === null || undefined
            ? bookAndGlasses
            : fetchedDetail.image
        }
      >
        {console.log(fetchedDetail)}
        <Card style={{ width: '100%' }}>
          <Container>
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
              Like
            </Button>
            <Spacing mTop={theme.small} />
            <Button className="secondary stretch large" onClick={handleBorrow}>
              Borrow
            </Button>
            <Spacing mTop={theme.small} />
            <FetchedComments ISBN={fetchedDetail.ISBN} />
            <Spacing mTop={theme.xlarge} />
            <FormComment fetchedDetail={fetchedDetail} userData={userData} />
          </Container>
        </Card>
      </LayoutWithImage>
    </ShouldLoading>
  );
};

export default FetchedDetail;
