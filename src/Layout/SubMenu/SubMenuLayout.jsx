import React from 'react';
import Layout from 'layout';
import SubMenu from 'layout/SubMenu/MenuLinks';
import { Spacing, Container } from 'shared';
import { ResponsiveContainer, ResponsiveCard } from 'layout/SubMenu/Style';
import LandingToSign from 'containers/Home/LandingToSign';

const SubMenuLayout = ({ children, listItems, menuHandler, activeMenu }) => {
  return (
    <Layout>
      <LandingToSign />
      <ResponsiveContainer height="auto">
        <SubMenu
          listItems={listItems}
          menuHandler={menuHandler}
          activeMenu={activeMenu}
        />
        <Spacing mRight="-5px" />
        <Container style={{ flexGrow: 1 }}>
          <ResponsiveCard>
            <Container className="vertical" height="60%">
              {children}
            </Container>
          </ResponsiveCard>
        </Container>
      </ResponsiveContainer>
    </Layout>
  );
};

export default SubMenuLayout;
