import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from 'components/atoms';
import FooterLinks from 'components/organisms/FooterLinks';
import MainWrapper from 'components/molecules/MainWrapper';

const FooterContainer = styled.div`
  display: flex;
  background-color: ${theme.darkGrey};
  width: 100vw;
  height: 150px;
  margin-top: 100px;
  padding-top: ${theme.large};
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <MainWrapper>
        <FooterLinks />
      </MainWrapper>
    </FooterContainer>
  );
};

export default Footer;
