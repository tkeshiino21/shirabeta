import styled from 'styled-components';
import { theme, media } from 'Shared';

export const Table = styled.table`
  color: ${theme.light};
  table-layout: fixed;
`;

export const TableHead = styled.thead`
  background-color: ${theme.primary};
`;

export const TableHeader = styled.th`
  color: ${theme.light};
  font-size: 0.85em;
  padding: 1em;
`;

export const TableBody = styled.tbody`
  font-size: 0.85em;
  padding: 1em;
`;

export const TableRow = styled.tr`
  background-color: ${theme.light};
  border-bottom: 2px solid ${theme.naturalDark};
  padding: 1em;
  text-align: left;
  font-size: 0.8em;
`;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${theme.naturalDark};
  padding: 1em;
  text-align: left;
  font-size: 0.8em;
`;

export const StyledTableCell = styled.td`
  color: ${theme.dark};
  padding: 1em;

  &.title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${media.sm`
      width:50px;
    `}
  }
`;
