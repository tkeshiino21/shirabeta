import React from 'react';
import Layout from 'Layout';
import SubMenu from 'Layout/SubMenu/MenuLinks';
import { Spacing, Container } from 'Shared';
import {
  ResponsiveContainer,
  ResponsiveCard,
} from 'Layout/SubMenu/Style';
import LandingToSign from 'containers/LandingToSign';

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
