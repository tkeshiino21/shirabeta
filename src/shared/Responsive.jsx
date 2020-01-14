import styled from 'styled-components';

export const ResponsiveVanish = styled(Container)`
  width: 10px;
  height: auto;
  align-items: center;
  border-right: 1px solid grey;

  ${media.md`
    display: none;
  `}
`;
