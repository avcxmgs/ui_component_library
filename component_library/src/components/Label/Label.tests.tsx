import React from 'react';
import { render, screen } from "@testing-library/react";
import Label from "./Label";
import '@testing-library/jest-dom'

describe('Label', () => {
  test('is visible', () => {
    render(<Label disabled={false}>Default Label</Label>);
    expect(screen.getByText('Default Label')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(<Label disabled={true}>Disabled Label</Label>);
    expect(screen.getByText('Disabled Label')).toHaveStyle('color: gray; cursor: not-allowed');
  });
});