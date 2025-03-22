import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.td`
    background-color: pink;
    border: 1px solid black;
`;

const TableCell: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledCell>{children}</StyledCell>;
};

export default TableCell;