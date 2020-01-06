import React from 'react';
import styled from 'styled-components';

// the containers for layout
// Don't set Margin or Padding this components
export const Container = styled.div`
  display: ${props => props.display || 'flex'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || '100%'};
  /* 水平方向の揃え flex-start flex-end center space-between space-around space-evenly*/
  justify-content: ${props => props.justify || 'flex-start'};
  /* 垂直方向の揃え stretch flex-start flex-end center baseline*/
  align-items: ${props => props.align || 'stretch'};
  /* 垂直方向の複数行 stretch flex-start flex-end center space-between space-around space-evenly*/
  align-content: ${props => props.aligns || 'strech'};

  &.vertical {
    flex-direction: column;
  }

  &.horizontal {
    flex-direction: row;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  background-image: url(${props => props.image || null});
  background-size: ${props => props.bgSize || 'cover'};
  background-repeat: no-repeat;
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '100%'};
  opacity: ${props => props.opacity || '0.7'};
`;

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const MainContents = styled.div`
  width: 900px;
  margin: 0 10px;
`;

export const MainWrapper = props => {
  return (
    <MainContainer>
      <MainContents>{props}</MainContents>
    </MainContainer>
  );
};
