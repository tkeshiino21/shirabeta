import React, { useState } from 'react';
import Qiita from 'containers/Home/Qiita';
import Library from 'containers/Home/Library';
import { subMenuItems } from 'components/Home/style';
import SubMenuLayout from 'layout/SubMenu/SubMenuLayout';

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(subMenuItems[1].name);
  const menuHandler = e => {
    setActiveMenu(e.target.value);
  };
  return (
    <SubMenuLayout
      listItems={subMenuItems}
      activeMenu={activeMenu}
      menuHandler={menuHandler}
    >
      {activeMenu === 'qiita' ? <Qiita /> : <Library />}
    </SubMenuLayout>
  );
};

export default Home;
