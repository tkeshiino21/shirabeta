import styled from 'styled-components';
import { theme, Container } from 'Shared';

export const TableContainer = styled(Container)`
  background-color: ${theme.light};
`;
export const Table = styled.table`
  color: ${theme.light};
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
  color: #fff;
  font-size: 0.85em;
  padding: 1em;
`;

export const TableRow = styled.tr`
  background-color: #fff;
  border-bottom: 2px solid #fff;
  color: #fff;
  padding: 1em;
  text-align: left;
  font-size: 0.8em;
`;

export const StyledTableRow = styled.tr`
  background-color: #fff;
  border-bottom: 2px solid #fff;
  color: #fff;
  padding: 1em;
  text-align: left;
  font-size: 0.8em;
  table tr:nth-child(even) {
    background-color: #eee;
  }
`;

export const StyledTableCell = styled.td`
  color: ${theme.dark};
  padding: 1em;
`;
