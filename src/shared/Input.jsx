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

export const Textarea = styled.textarea`
  margin-left: ${theme.small};
  height: 200px;
  width: 100%;

  &.outlined {
    outline: 1px solid ${theme.naturalDark};
    background: ${theme.natural};
  }

  &.underlined {
    border-bottom: 1px solid ${theme.naturalDark};
  }
`;
