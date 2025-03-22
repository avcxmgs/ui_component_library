import React from 'react';
import { render, screen } from "@testing-library/react";
import Text from "./Text";
import '@testing-library/jest-dom'

describe('Text', () => {
  test('is visible', () => {
    render(<Text disabled={false}>Default Text</Text>);
    expect(screen.getByText('Default Text')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(<Text disabled={true}>Disabled Text</Text>);
    expect(screen.getByText('Disabled Text')).toHaveStyle('background-color: darkgray; color: gray; cursor: not-allowed');
  });
});