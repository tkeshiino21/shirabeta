import React, { FC } from 'react';
import * as Yup from 'yup';
import FormFormat from 'components/molecules/FormFormat';
import { CustomTextarea } from 'components/molecules/FormCustom';

type Props = {
  fetchedDetail: any;
  userData: any;
  onComment: (
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
  ) => void;
};

const FormComment: FC<Props> = ({ fetchedDetail, userData, onComment }) => {
  const formDatas: any = {
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
    onSubmit: (comment: any) =>
      onComment(
        fetchedDetail.ISBN,
        fetchedDetail.title,
        userData.uid,
        userData.userName,
        comment.comment,
      ),
    items: [
      {
        name: 'comment',
        label: 'comment',
        type: 'text',
        input: CustomTextarea,
      },
    ],
  };

  return <FormFormat formDatas={formDatas} />;
};

export default FormComment;
