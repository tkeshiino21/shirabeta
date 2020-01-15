import React, { useState } from 'react';
import Layout from 'components/Layout';
import Qiita from 'containers/Qiita';
import Libraries from 'containers/Libraries';
import LandingToSign from 'containers/LandingToSign';
import SubMenu from 'components/Layout/SubMenu/MenuLinks';
import { Container, Spacing } from 'Shared';
import { subMenuItems } from 'components/Home/SubMenuItems';
import { ResponsiveContainer, ResponsiveCard } from 'components/Home/Style';

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(subMenuItems[1].name);
  const menuHandler = e => {
    setActiveMenu(e.target.value);
  };
  return (
    <Layout>
      <LandingToSign />
      <ResponsiveContainer height="auto">
        <SubMenu
          listItems={subMenuItems}
          menuHandler={menuHandler}
          currentMenu={activeMenu}
        />
        <Spacing mRight="-5px" />
        <Container width="100%" height="80%">
          <ResponsiveCard>
            <Container className="vertical" height="60%">
              {activeMenu === 'qiita' ? <Qiita /> : <Libraries />}
            </Container>
          </ResponsiveCard>
        </Container>
      </ResponsiveContainer>
    </Layout>
  );
};

export default Home;
