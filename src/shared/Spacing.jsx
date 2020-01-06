import styled from 'styled-components';

export const Spacing = styled.div`
  padding-top: ${props => props.pTop}px;
  padding-right: ${props => props.pRight}px;
  padding-bottom: ${props => props.pBottom}px;
  padding-left: ${props => props.pLeft}px;
  margin-top: ${props => props.mTop};
  margin-right: ${props => props.mRight};
  margin-bottom: ${props => props.mBottom};
  margin-left: ${props => props.mLeft};
`;

Spacing.defaultProps = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
};
