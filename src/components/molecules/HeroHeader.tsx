import React, { FC } from 'react';
import styled from 'styled-components';
import heroImage from 'images/heroImage.jpg';
import { Image } from 'components/atoms';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
`;

const HeroHeader: FC = () => {
  return (
    <Wrapper>
      <Image className="shadow" image={heroImage} width="100vw" height="58vh" />
    </Wrapper>
  );
};

export default HeroHeader;
