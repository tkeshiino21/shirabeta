import styled from 'styled-components';
import { theme, media, Button, Card, Container, Text } from 'Shared';

export const ResponsiveContainer = styled(Container)`
  width: 100%;
  flex-direction: row;
  ${media.md`
    flex-direction: column;
  `}
`;

export const ResponsiveCard = styled(Card)`
  display: block;
  height: 60%;
  ${media.md`
    max-width: 80vw;
  `}
`;
