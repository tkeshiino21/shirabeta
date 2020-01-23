import React from 'react';
import * as Yup from 'yup';
import FormFormat from 'components/molecules/FormFormat';
import { CustomTextarea } from 'components/molecules/FormCustom';

const FormComment = ({ bookData, userData, onSubmit }) => {
  const formDatas = {
    initialValues: {
      comment: '',
    },
    validationShema: Yup.object({
      comment: Yup.string()
        .max(400, 'Must be 300 characters or less')
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    }),
    action: 'POST',
    onSubmit: onSubmit(
      bookData.ISBN,
      bookData.title,
      userData.name,
      userData.uid,
    ),
    items: [
      {
        name: 'comment',
        type: 'text',
        input: CustomTextarea,
      },
    ],
  };
  return <FormFormat formDatas={formDatas} />;
};

export default FormComment;
