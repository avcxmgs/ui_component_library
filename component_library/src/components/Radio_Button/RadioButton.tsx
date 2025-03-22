import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{disabled?: boolean}>`
color: ${({ disabled }) => (disabled ? 'gray' : 'pink')};
cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledRadioButton = styled.input<{disabled?: boolean}>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({label, checked, disabled}) => {
    return ( <StyledLabel disabled={disabled}>
    <StyledRadioButton type="radio" checked={checked} disabled={disabled}/>{label}
    </StyledLabel>
    );
};

export default RadioButton;