import styled from 'styled-components';

export const Border = styled.div`
  display: block;
  border-top: ${props => props.top} solid ${props => props.color};
  border-right: ${props => props.right} solid ${props => props.color};
  border-bottom: ${props => props.bottom} solid ${props => props.color};
  border-left: ${props => props.left} solid ${props => props.color};
  width: ${props => props.width || 'auto'};
  padding-top: ${props => props.pTop}px;
  padding-right: ${props => props.pRight}px;
  padding-bottom: ${props => props.pBottom}px;
  padding-left: ${props => props.pLeft}px;
  margin-top: ${props => props.mTop};
  margin-right: ${props => props.mRight};
  margin-bottom: ${props => props.mBottom};
  margin-left: ${props => props.mLeft};
  &.shadow {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const Shadow = styled.div`
  box-shadow: 1px 1px 2px 4px rgba(0, 0, 0, 0.4);
`;

Border.defaultProps = {
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
  color: '#000000',
};
