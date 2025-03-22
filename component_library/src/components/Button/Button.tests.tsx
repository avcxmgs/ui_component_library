import React from 'react';
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import '@testing-library/jest-dom'

describe('Button', () => {
  test('is visible', () => {
    render(<Button disabled={false}>Default Button</Button>);
    expect(screen.getByText('Default Button')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(<Button disabled={true}>Disabled Button</Button>);
    expect(screen.getByText('Disabled Button')).toHaveStyle('background-color: gray; cursor: not-allowed');
  });
});