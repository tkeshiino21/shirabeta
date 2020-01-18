import styled from 'styled-components';
import { media, theme, Card, Container, Button } from 'Shared';

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
  flex-direction: row;
  min-width: 165px;
  ${media.md`
  width: 100%;
    flex-direction: column;
  `}
`;

export const ResponsiveCard = styled(Card)`
  display: block;
  width: 100%;
  height: 60%;

  ${media.md`
    max-width: 80vw;
  `}
`;
