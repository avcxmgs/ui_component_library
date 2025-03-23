import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'pink')};
  color: white;
  font-size: 16px;
  border: none;
  padding: 8px 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({children, disabled}) => {
    return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;