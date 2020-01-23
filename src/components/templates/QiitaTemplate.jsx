import React, { useState } from 'react';
import { MdSearch, MdBook } from 'react-icons/md';
import { Box } from 'components/atoms';
import PostQiita from 'containers/organisms/PostQiita';
import LayoutWithSubMenu from 'components/organisms/Layout/LayoutWithSubMenu';

const QiitaTemplate = () => {
  const [activeMenu, setActiveMenu] = useState(listItems[1].name);
  const menuHandler = e => {
    setActiveMenu(e.target.value);
  };
  const listItems = [
    {
      name: 'qiita',
      label: 'qiita',
      icon: MdSearch,
    },
    {
      name: 'library',
      label: 'ライブラリ',
      icon: MdBook,
    },
  ];
  return (
    <LayoutWithSubMenu activeMenu={activeMenu} menuHandler={menuHandler}>
      <Box className="vertical">
        <PostQiita />
      </Box>
    </LayoutWithSubMenu>
  );
};

export default QiitaTemplate;
