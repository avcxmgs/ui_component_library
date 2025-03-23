import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select<{disabled?: boolean}>`
  background-color: ${({ disabled }) => (disabled ? 'darkgray' : 'white')};
  color: ${({ disabled }) => (disabled ? 'gray' : 'black')};
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Dropdown: React.FC<DropdownProps> = ({items, disabled}) => {
  return (
    <StyledDropdown disabled={disabled}>
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;