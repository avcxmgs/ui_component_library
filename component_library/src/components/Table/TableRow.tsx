import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.tr`
    background-color: pink;
    border: 1px solid black;
`;

const TableRow: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledRow>{children}</StyledRow>;
};

export default TableRow;