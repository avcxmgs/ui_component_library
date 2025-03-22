import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  color: ${({ disabled }) => (disabled ? 'gray' : 'pink')};
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Label: React.FC<LabelProps> = ({children, htmlFor, disabled}) => {
  return <StyledLabel htmlFor={htmlFor} disabled={disabled}>{children}</StyledLabel>;
};

export default Label;