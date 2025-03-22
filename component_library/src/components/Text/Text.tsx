import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.textarea<TextProps>`
  background-color: ${({ disabled }) => (disabled ? 'darkgray' : 'white')};
  color: ${({ disabled }) => (disabled ? 'gray' : 'black')};
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Text: React.FC<TextProps> = ({children, disabled}) => {
    return <StyledText disabled={disabled}>{children}</StyledText>;
};

export default Text;