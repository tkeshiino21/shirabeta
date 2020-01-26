import React, { useState } from 'react';
import { MdSearch, MdBook } from 'react-icons/md';
// import Qiita from 'containers/Home/Qiita';
import PostQiita from 'containers/organisms/PostQiita';
import PostLibrary from 'containers/organisms/PostLibrary';
import LayoutWithSubMenu from 'components/organisms/Layout/LayoutWithSubMenu';
import LandingView from 'components/organisms/LandingView';
import { Box } from 'components/atoms';

const Home = () => {
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
  const menuHandler = e => {
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
