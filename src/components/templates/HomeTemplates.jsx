import React, { useState } from 'react';
import { MdSearch, MdBook } from 'react-icons/md';
// import Qiita from 'containers/Home/Qiita';
import Qiita from 'components/templates/QiitaTemplate';
import Library from 'containers/Home/Library';
import LayoutWithSubMenu from 'components/organisms/Layout/LayoutWithSubMenu';
import LandingView from 'components/organisms/LandingView';

const Home = () => {
  const subMenuItems = [
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
      {activeMenu === 'qiita' ? null : <Library />}
    </LayoutWithSubMenu>
  );
};

export default Home;
