import React from 'react';
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";
import '@testing-library/jest-dom'

describe('Radio Button', () => {
  test('is visible', () => {
    render(<RadioButton label="Default Radio Button" disabled={false}/>);
    expect(screen.getByLabelText('Default Radio Button')).toBeVisible();
  });

  test('becomes unclickable when disabled', () => {
    render(<RadioButton label="Disabled Radio Button" disabled={true}/>);
    expect(screen.getByLabelText('Disabled Radio Button')).toHaveStyle('cursor: not-allowed');
  });
});