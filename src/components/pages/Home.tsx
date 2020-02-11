import React, { useState } from 'react';
import { MdSearch, MdBook } from 'react-icons/md';
import PostQiita from 'containers/templates/PostQiita';
import PostLibrary from 'containers/templates/PostLibrary';
import LayoutWithSubMenu from 'components/organisms/LayoutWithSubMenu';

const Home: React.FC = () => {
  const subMenuItems = [
    {
      name: 'qiita',
      icon: MdSearch,
    },
    {
      name: 'library',
      icon: MdBook,
    },
  ];
  const [activeMenu, setActiveMenu] = useState(subMenuItems[1].name);
  const menuHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveMenu(e.target.value);
  };

  return (
    <LayoutWithSubMenu
      listItems={subMenuItems}
      activeMenu={activeMenu}
      menuHandler={menuHandler}
    >
      {activeMenu === 'qiita' ? <PostQiita /> : <PostLibrary />}
    </LayoutWithSubMenu>
  );
};

export default Home;
