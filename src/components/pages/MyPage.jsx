import React, { useEffect } from 'react';
import BorrowData from 'components/organisms/FetchedBorrowData';
import MyPageTemplate from 'components/templates/MyPageTemplate';
import Auth from 'components/organisms/Auth';

const MyPage = ({ borrowData, onReturn, onRequest, uid }) => {
  useEffect(() => onRequest(uid), [onRequest, uid]);
  return (
    <MyPageTemplate>
      <Auth />
      <BorrowData
        borrowData={borrowData}
        onReturn={onReturn}
        onRequest={onRequest}
        uid={uid}
      />
    </MyPageTemplate>
  );
};

export default MyPage;
