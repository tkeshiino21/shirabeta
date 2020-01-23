import React from 'react';
import FormFormat from 'components/molecules/FormFormat';
import { CustomInput, CustomSelect } from 'components/molecules/FormCustom';

const BookRegisterForm = ({ fetchedBook }) => {
  const formDatas = {
    initialValues: {
      ISBN: ISBN,
      title: fetchedBook === null ? '' : fetchedBook[0].title,
      author: fetchedBook === null ? '' : fetchedBook[0].authors,
      publishedDate: fetchedBook === null ? '' : fetchedBook[0].publishedDate,
      image: fetchedBook === null ? '' : fetchedBook[0].image,
      description: fetchedBook === null ? '' : fetchedBook[0].description,
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
    onSubmit: (values, { setSubmitting }) => {
      onSubmit(values);
      setSubmitting(false);
      setISBN('');
      setShowSnack('show');
      setTimeout(() => {
        return setShowSnack('hidden');
      }, 3000);
    },
    action: 'SUBMIT',
    items: [
      {
        name: 'ISBN',
        input: CustomInput,
        type: 'text',
      },
      {
        name: 'title',
        input: CustomInput,
        type: 'text',
      },
      {
        name: 'author',
        input: CustomInput,
        type: 'text',
      },
      {
        name: 'publishedDate',
        input: CustomInput,
        type: 'text',
      },
      {
        name: 'category',
        input: CustomSelect,
        type: 'text',
      },
      {
        name: 'description',
        input: HiddenInput,
        type: 'text',
      },
      {
        name: 'image',
        input: HiddenInput,
        type: 'text',
      },
    ],
  };
  return (
    <Card width="auto">
      <Container className="vertical" justify="center">
        <FormFormat formDatas={formDatas} />
        <Spacing mTop={theme.xlarge} />
        <Button className="primary" type="submit">
          {authAction}
        </Button>
      </Container>
    </Card>
  );
};

export default BookRegisterForm;
