import React, { FC } from 'react';
import * as Yup from 'yup';
import bookAndGlasses from 'images/bookAndGlasses.jpg';
import FormFormat from 'components/molecules/FormFormat';
import LayoutWithImage from 'components/organisms/LayoutWithImage';
import { Box, Container, Card, Loader, Snackbar } from 'components/atoms';
import { CustomInput, SelectCategory } from 'components/molecules/FormCustom';
import FormISBN from 'containers/templates/FormISBN';

type Props = {
  name: string;
  label: string;
  type: string;
  input: FC;
};
type BookRegisterFormProps = {
  isLoading: boolean;
  isAdding: boolean;
  fetchedBook: any;
  inputISBN: any;
  onRegister: (arg0: any) => void;
  showSnack: boolean;
};

const BookRegisterForm: FC<BookRegisterFormProps> = ({
  isLoading,
  isAdding,
  fetchedBook,
  inputISBN,
  onRegister,
  showSnack,
}) => {
  const formDatas: {
    initialValues: object;
    validationSchema: object;
    onSubmit: (bookData: object) => void;
    action: string;
    items: Props[];
  } = {
    initialValues: {
      ISBN: inputISBN === null ? '' : inputISBN,
      title: fetchedBook === null ? '' : fetchedBook[0].title,
      author: fetchedBook === null ? '' : fetchedBook[0].authors,
      publishedDate: fetchedBook === null ? '' : fetchedBook[0].publishedDate,
      image: fetchedBook === null ? '' : fetchedBook[0].image,
      description: fetchedBook === null ? '' : fetchedBook[0].description,
      category: '',
    },
    validationSchema: Yup.object({
      ISBN: Yup.string()
        .max(16, '不正なISBNコードです')
        .required('↑Required'),
      title: Yup.string()
        .max(150, 'タイトルが長すぎます')
        .required('Required'),
      author: Yup.string().required('Required'),
      publishedDate: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .matches(/[a-z0-9_-]+/, '半角英数字と記号のみ')
        .required('Required'),
      description: Yup.string(),
      image: Yup.string(),
      category: Yup.string().required('Required'),
    }),
    onSubmit: bookDatas => {
      onRegister(bookDatas);
    },
    action: 'SUBMIT',
    items: [
      {
        name: 'title',
        label: 'title',
        input: CustomInput,
        type: 'text',
      },
      {
        name: 'author',
        label: 'author',
        input: CustomInput,
        type: 'text',
      },
      {
        name: 'publishedDate',
        label: 'issueDate',
        input: CustomInput,
        type: 'text',
      },
      {
        name: 'category',
        label: 'category',
        input: SelectCategory,
        type: 'text',
      },
    ],
  };

  return (
    <LayoutWithImage
      image={
        fetchedBook === null || undefined
          ? bookAndGlasses
          : fetchedBook[0].image
      }
      basis="52%"
    >
      <Card style={{ width: '100%' }}>
        <Box justify="center">
          <Container
            style={{
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <Box className="vertical" justify="center">
              {isAdding === true ? null : <FormISBN />}
              {isLoading === true ? (
                <Loader />
              ) : (
                <>
                  <FormFormat
                    formDatas={{
                      initialValues: formDatas.initialValues,
                      validationSchema: formDatas.validationSchema,
                      action: formDatas.action,
                      onSubmit: formDatas.onSubmit,
                      items: formDatas.items,
                    }}
                  />
                </>
              )}
            </Box>
          </Container>
        </Box>
      </Card>
      <Snackbar className={showSnack === true ? 'show' : 'hidden'}>
        Successfully Added!
      </Snackbar>
    </LayoutWithImage>
  );
};

export default BookRegisterForm;
