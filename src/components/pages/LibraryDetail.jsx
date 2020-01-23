import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ValidFormComment from 'components/organisms/FormDatas';
import LibraryDetailTemplate from 'components/templates/LibraryDetailTemplate';

const LibraryDetail = ({
  onBorrow,
  onRequest,
  onComment,
  onCommentsRequest,
}) => {
  const slug = useParams();
  const ISBN = slug.id;
  useEffect(() => onRequest(ISBN), [ISBN, onRequest]);
  useEffect(() => onCommentsRequest(ISBN), [ISBN, onCommentsRequest]);
  // *backButton用
  const history = useHistory();
  const [showSnack, setShowSnack] = useState({
    class: 'hidden',
    message: '',
  });
  const [formIsOpen, setFormIsOpen] = useState(false);
  // *CommentFormの送信
  const handleComment = () => setFormIsOpen(!formIsOpen);
  const handleSubmit = (comment, { setSubmitting }) => {
    onComment();
    setSubmitting(false);
    onCommentsRequest(ISBN);
    handleComment();
    setShowSnack({ class: 'show', message: 'Successfully Borrowed!' });
    setTimeout(() => {
      return setShowSnack({ class: 'hidden', message: '' });
    }, 3000);
  };
  // *Borrowの処理
  const handleBorrow = () => {
    onBorrow(ISBN);
    setShowSnack({ class: 'show', message: 'Successfully Borrowed!' });
    setTimeout(() => {
      return history.push('/my-page');
    }, 2000);
  };
  return <LibraryDetailTemplate></LibraryDetailTemplate>;
};

export default LibraryDetail;
