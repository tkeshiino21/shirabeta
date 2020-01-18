import React, { useEffect, useState } from 'react';
import Layout from 'Layout';
import { MdKeyboardBackspace, MdModeEdit } from 'react-icons/md';
import BookData from 'components/Home/Library/LibraryDetail/BookData';
import CommentForm from 'components/Home/Library/LibraryDetail/CommentForm';
import CommentsData from 'components/Home/Library/LibraryDetail/CommentsData';
import {
  theme,
  Box,
  Button,
  CardContainer,
  Container,
  Spacing,
  Snackbar,
  ImgContainer,
} from 'Shared';
import { useParams, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

const LibraryDetail = ({
  uid,
  userName,
  isLoading,
  library,
  comments,
  onRequest,
  onBorrow,
  onComment,
  onCommentsRequest,
}) => {
  const [showSnack, setShowSnack] = useState({
    class: 'hidden',
    message: '',
  });
  // *backButton用
  const history = useHistory();
  // *Firestoreから選択した本のデータをFetchする
  const slug = useParams();
  const ISBN = slug.id;
  useEffect(() => onRequest(ISBN), [ISBN, onRequest]);
  useEffect(() => onCommentsRequest(ISBN), [ISBN, onCommentsRequest]);
  // *CommentFormの送信
  const [formIsOpen, setFormIsOpen] = useState(false);
  const handleComment = () => setFormIsOpen(!formIsOpen);
  const validationSchema = Yup.object({
    comment: Yup.string()
      .max(400, 'Must be 300 characters or less')
      .min(8, 'Must be 8 characters or more')
      .required('Required'),
  });
  const title = library === undefined ? null : library.title;
  const handleSubmit = (comment, { setSubmitting }) => {
    onComment(ISBN, title, uid, userName, comment.comment);
    setSubmitting(false);
    onCommentsRequest(ISBN);
    handleComment();
    setShowSnack({ class: 'show', message: 'Successfully Borrowed!' });
    setTimeout(() => {
      return setShowSnack({ class: 'hidden', message: '' });
    }, 3000);
  };
  console.log('come', comments);
  // Borrowの処理
  const handleBorrow = () => {
    onBorrow(ISBN, title, uid);
    setShowSnack({ class: 'show', message: 'Successfully Borrowed!' });
    setTimeout(() => {
      return history.push('/my-page');
    }, 2000);
  };
  // *以下View
  if (isLoading === true) return <h1>isLoading</h1>;
  return (
    <Layout>
      <Box>
        <Container className="vertical">
          <Spacing mTop={theme.medium} mBottom={theme.medium}>
            <Button onClick={() => history.goBack()} className="text xlarge">
              <MdKeyboardBackspace />
            </Button>
          </Spacing>
          <CardContainer
            className="horizontal wrap"
            style={{ alignSelf: 'center' }}
          >
            <ImgContainer
              bgSize="contain"
              height="auto"
              style={{
                backgroundColor: theme.light,
                flexBasis: '300px',
                minHeight: '200px',
              }}
              image="http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
            />
            <Container className="grow" style={{ flexBasis: '300px' }}>
              <CardContainer className="vertical" padding={`0 ${theme.xlarge}`}>
                <Spacing mTop={theme.xlarge} />
                <BookData library={library} />
                <Container justify="flex-end">
                  <Button
                    onClick={handleComment}
                    className="text"
                    style={{ width: '200px', marginTop: '-80px' }}
                  >
                    <p>
                      <MdModeEdit
                        style={{
                          width: '20px',
                          height: '20px',
                        }}
                      />
                      コメントを書く
                    </p>
                  </Button>
                </Container>

                {formIsOpen === true ? (
                  <CommentForm
                    validationSchema={validationSchema}
                    handleSubmit={handleSubmit}
                  />
                ) : null}
                <CommentsData comments={comments} />
                <Container justify="center">
                  <Button
                    className="primary stretch"
                    onClick={handleBorrow}
                    style={{ width: '80%', margin: `${theme.xlarge} auto` }}
                  >
                    借りる
                  </Button>
                </Container>
              </CardContainer>
            </Container>
          </CardContainer>
        </Container>

        <Snackbar className={showSnack.class}>{showSnack.message}</Snackbar>
      </Box>
    </Layout>
  );
};

export default LibraryDetail;
