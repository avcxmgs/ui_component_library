import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';
// import TableHeader from './TableHeader';
// import TableRow from './TableRow';
// import TableCell from './TableCell';
// import TableFooter from './TableFooter';


const StyledTable = styled.table<TableProps>`
  background-color: ${({ disabled }) => (disabled ? 'darkgray' : 'white')};
  color: ${({ disabled }) => (disabled ? 'gray' : 'black')};
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Table: React.FC<TableProps> = ({children, disabled}) => {
    return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;