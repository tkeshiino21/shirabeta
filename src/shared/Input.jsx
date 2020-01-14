import styled from 'styled-components';
import { theme } from './theme';

export const Input = styled.input`
  margin-left: ${theme.small};

  &.outlined {
    outline: 1px solid ${theme.naturalDark};
    background: ${theme.natural};
  }

  &.underlined {
    border-bottom: 1px solid ${theme.naturalDark};
  }
`;
