import styled from 'styled-components';
import { theme } from './theme';
import { media } from './media';

export const Table = styled.table`
  color: ${theme.light};
  table-layout: fixed;
`;
export const TableHead = styled.thead`
  background-color: ${theme.primary};
`;
export const TableHeader = styled.th`
  color: ${theme.light};
  font-size: 1em;
  padding: 1em;
`;
export const TableBody = styled.tbody`
  font-size: 1em;
  padding: 1em;
`;
export const TableRow = styled.tr`
  background-color: ${theme.light};
  border-bottom: 1px solid ${theme.naturalDark};
  padding: 1em;
  text-align: left;
  font-size: 1em;
`;
export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${theme.naturalDark};
  padding: 1em;
  text-align: left;
  font-size: 0.8em;
`;

type StyledTableCellProps = {
  to?: string;
};
export const StyledTableCell = styled.td<StyledTableCellProps>`
  color: ${theme.dark};
  line-height: 2.4;
  padding: 1em;

  &.title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 500px;
    ${media.md`
      width:100px;
    `}
  }

  &.collapse {
    ${media.sm`
      display: none;
    `}
  }
`;
