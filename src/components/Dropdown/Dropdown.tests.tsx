import React from 'react';
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";
import '@testing-library/jest-dom'

describe('Dropdown', () => {
  test('is visible', () => {
    render(<Dropdown items={[{value: 'd1', label: 'Default 1'}, {value: 'd2', label: 'Default 2'}]} disabled={false}/>);
    expect(screen.getByRole('combobox')).toBeVisible();
  });

  test('becomes unclickable when disabled', () => {
    render(<Dropdown items={[{value: 'd1', label: 'Default 1'}, {value: 'd2', label: 'Default 2'}]} disabled={true}/>);
    expect(screen.getByRole('combobox')).toHaveStyle('cursor: not-allowed');
  });
});