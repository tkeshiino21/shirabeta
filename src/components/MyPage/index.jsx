import React from 'react';
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

const MyPage = ({ authState }) => {
  let location = useLocation();
  if (authState !== true) {
    return <Redirect to={{ pathname: 'login', state: 'MyPage' }} />;
  }
  return (
    <Layout>
      <ResponsiveContainer height="auto">
        <SubMenu listItems={listItems} />
        <Spacing mRight="-5px" />
        <Container width="100%" height="80%">
          <ResponsiveCard>
            <Container className="vertical" height="60%">
              <h1>hello</h1>
            </Container>
          </ResponsiveCard>
        </Container>
      </ResponsiveContainer>
    </Layout>
  );
};

export default MyPage;
