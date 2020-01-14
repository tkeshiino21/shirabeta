import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'Shared/theme';

export const LinkButton = styled(Link)`
  color: ${props => props.color || theme.secondary};
`;

export const Button = styled.button`
  padding: 12px;
  border-radius: 4px;
  padding-top: ${props => props.pTop}px;
  padding-right: ${props => props.pRight}px;
  padding-bottom: ${props => props.pBottom}px;
  padding-left: ${props => props.pLeft}px;
  margin-top: ${props => props.mTop};
  margin-right: ${props => props.mRight};
  margin-bottom: ${props => props.mBottom};
  margin-left: ${props => props.mLeft};

  &.primary {
    background-color: ${theme.primary};
    border: 1px solid ${theme.light};
    color: ${theme.light};
  }

  &.secondary {
    background-color: inherit;
    border: 1px solid ${theme.primary};
    color: ${theme.primary};
  }

  &.text {
    background-color: inherit;
    border: none;
    color: ${props => props.color || theme.naturalDark};
  }

  &.gradation {
    background-image: linear-gradient(45deg, #ffc107 0%, #ff8b5f 100%);
    color: ${props => props.color || theme.light};
  }

  &.stretch {
    width: 100%;
  }
`;

export const InlineButton = styled.button`
  display: inline;
  border: 1px solid ${theme.naturalDark};
`;

Button.defaultProps = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
};
