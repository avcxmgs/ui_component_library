import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.thead`
    background-color: pink;
    border: 1px solid black;
`;

const TableHeader: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledHeader>{children}</StyledHeader>;
};

export default TableHeader;