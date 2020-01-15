import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Layout from 'components/Layout';
import SubMenu from 'components/Layout/SubMenu/MenuLinks';
import { MdTrendingUp, MdFlag } from 'react-icons/md';
import { media, Spacing, Container, Card } from 'Shared';

const listItems = [
  {
    name: 'BookLog',
    label: '貸出履歴',
    icon: MdFlag,
  },
  {
    name: 'Borrowed',
    label: '貸出中の本',
    icon: MdTrendingUp,
  },
];

const ResponsiveContainer = styled(Container)`
  width: 100%;
  flex-direction: row;
  ${media.md`
    flex-direction: column;
  `}
`;

const ResponsiveCard = styled(Card)`
  display: block;
  height: 400px;
  ${media.md`
    max-width: 80vw;
  `}
`;

const PageLayout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(listItems[1].name);
  const menuHandler = e => {
    setActiveMenu(e.target.value);
  };
  return (
    // TODO: このレイアウトはLayoutに移して使い回す
    <Layout>
      <ResponsiveContainer height="auto">
        <SubMenu
          listItems={listItems}
          menuHandler={menuHandler}
          currentMenu={activeMenu}
        />
        <Spacing mRight="-5px" />
        <Container width="100%">
          <ResponsiveCard>
            <Container className="vertical">{children}</Container>
          </ResponsiveCard>
        </Container>
      </ResponsiveContainer>
    </Layout>
  );
};

export default PageLayout;
