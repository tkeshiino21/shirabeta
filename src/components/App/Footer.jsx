import React from 'react';
import styled from 'styled-components';
import { theme, Text, Container } from '../../shared';

const WText = styled(Text)`
  color: ${theme.light};
`;

const GText = styled(Text)`
  color: ${theme.naturalDark};
`;

const FooterContainer = styled.div`
  display: flex;
  background-color: #3e3e3e;
  justify-content: space-around;
  width: 100vw;
  height: 160px;
  margin-top: 100px;
`;

const Footer = () => {
  return (
    <FooterContainer className="vertical">
      <Container
        style={{ marginTop: theme.large }}
        justify="space-around"
        width="70vw"
        height="120px"
      >
        <Container className="vertical" style={{ flexGrow: 1 }}>
          <WText as="h2" fs={theme.large}>
            Livrio
          </WText>
          <GText fs={theme.small}>web created by Takeshi Inoue</GText>
        </Container>
        <Container className="horizontal" alignSelf="flex-end" width="300px">
          <Container className="vertical" width="50%">
            <WText as="h5" fs={theme.medium}>
              Footer
            </WText>
            <GText as="p">Footer</GText>
            <GText as="p">Footer</GText>
            <GText as="p">Footer</GText>
          </Container>
          <Container className="vertical" width="50%">
            <WText as="h5" fs={theme.medium}>
              Footer
            </WText>
            <GText as="p">Footer</GText>
            <GText as="p">Footer</GText>
            <GText as="p">Footer</GText>
          </Container>
        </Container>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
