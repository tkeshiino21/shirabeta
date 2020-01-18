import React from 'react';
import styled from 'styled-components';
import heroImage from 'images/heroImage.jpg';
import { ImgContainer, Border } from 'Shared';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
`;

const HeroHeader = () => {
  return (
    <Wrapper>
      <Border className="shadow">
        <ImgContainer
          className="shadow"
          image={heroImage}
          width="100vw"
          height="58vh"
          opacity="0.7"
        />
      </Border>
    </Wrapper>
  );
};

export default HeroHeader;
