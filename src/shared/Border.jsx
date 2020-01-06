import styled from 'styled-components';

export const Border = styled.div`
  display: block;
  border-top: ${props => props.top} solid ${props => props.color};
  border-right: ${props => props.right} solid ${props => props.color};
  border-bottom: ${props => props.bottom} solid ${props => props.color};
  border-left: ${props => props.left} solid ${props => props.color};
  width: ${props => props.width || 'auto'};
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
