import React from 'react';
import moduleName from 'components/organisms/Layout/LayoutWithSubMenu';
import SubMenuLayout from 'components/organisms/Layout/LayoutWithSubMenu';

const SubMenuMyPage = () => {
  const listItems = [
    {
      name: 'BookLog',
      label: 'ブックログ',
      icon: MdComment,
    },
    {
      name: 'Borrowed',
      label: '貸出中の本',
      icon: MdEventNote,
    },
  ];
  return <SubMenuLayout lisetItems={listItems} {...props} />;
};

export default SubMenuMyPage;
