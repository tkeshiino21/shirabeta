import React from 'react';
import styled from 'styled-components';

// the containers for layout
// Don't set Margin or Padding this components
export const Container = styled.div`
  display: ${props => props.display || 'flex'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  align-content: ${props => props.aligns || 'strech'};

  &.vertical {
    flex-direction: column;
  }

  &.horizontal {
    flex-direction: row;
  }

  &.grow {
    flex-grow: 1;
  }

  &.wrap {
    flex-wrap: wrap;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  background-image: url(${props => props.image || null});
  background-size: ${props => props.bgSize || 'cover'};
  background-repeat: no-repeat;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  opacity: ${props => props.opacity || '0.7'};
`;

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const MainContents = styled.div`
  width: 870px;
  margin: 0 10px;
`;

export const MainWrapper = ({ children }) => {
  return (
    <MainContainer>
      <MainContents>{children}</MainContents>
    </MainContainer>
  );
};

export const Box = styled.div`
  display: block;
`;
