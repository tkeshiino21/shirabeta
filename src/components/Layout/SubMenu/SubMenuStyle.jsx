import styled from 'styled-components';
import { media, theme, Container, Button } from 'Shared';

export const MenuButton = styled(Button)`
  border: none;
  padding: 5px;
  padding-left: 15px;
  margin-top: 5px;
  text-align: left;

  &:active {
    background-color: ${theme.primary};
  }
`;

export const ResponsiveContainer = styled(Container)`
  height: 80px;
  width: 165px;
  ${media.md`
      width: 100%;
    `}
`;
