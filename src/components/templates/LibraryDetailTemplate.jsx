import React, { useState } from 'react';
import LayoutCommon from 'components/organisms/Layout/LayoutCommon';
import { MdKeyboardBackspace, MdModeEdit } from 'react-icons/md';
// import BookData from 'components/organisms/PostLibrary';
import {
  theme,
  Box,
  Button,
  Card,
  Container,
  Spacing,
  Snackbar,
  Image,
} from 'components/atoms';
import FetcheCommentsData from 'components/organisms/FetchedCommentsData';
import ValidFormComment from 'components/organisms/FormDatas';

const LibraryDetail = ({
  library,
  comments,
  handleSubmit,
  handleBorrow,
  handleClick,
  handleComment,
}) => {
  const [showSnack, setShowSnack] = useState({
    class: 'hidden',
    message: '',
  });
  const [formIsOpen, setFormIsOpen] = useState(false);
  return (
    <LayoutCommon>
      <Box>
        <Container className="vertical">
          <Spacing mTop={theme.medium} mBottom={theme.medium}>
            <Button onClick={handleClick} className="text xlarge">
              <MdKeyboardBackspace />
            </Button>
          </Spacing>
          <Card className="horizontal wrap" style={{ alignSelf: 'center' }}>
            <Image
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
              <Card className="vertical" padding={`0 ${theme.xlarge}`}>
                <Spacing mTop={theme.xlarge} />
                {/* <BookData library={library} /> */}
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
                  <ValidFormComment handleSubmit={handleSubmit} />
                ) : null}
                <FetcheCommentsData comments={comments} />
                <Container justify="center">
                  <Button
                    className="primary stretch"
                    onClick={handleBorrow}
                    style={{ width: '80%', margin: `${theme.xlarge} auto` }}
                  >
                    借りる
                  </Button>
                </Container>
              </Card>
            </Container>
          </Card>
        </Container>

        <Snackbar className={showSnack.class}>{showSnack.message}</Snackbar>
      </Box>
    </LayoutCommon>
  );
};

export default LibraryDetail;
