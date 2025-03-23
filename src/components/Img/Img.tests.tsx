import React from 'react';
import { render, screen } from "@testing-library/react";
import Img from "./Img";
import '@testing-library/jest-dom'

describe('Img', () => {
  test('is visible', () => {
    render(<Img src="https://placehold.co/400" alt="Placeholder Image" disabled={false}/>);
    expect(screen.getByAltText('Placeholder Image')).toBeVisible();
  });

  test('opacity changes when disabled', () => {
    render(<Img src="https://placehold.co/400" alt="Disabled Image" disabled={true}/>);
    expect(screen.getByAltText('Disabled Image')).toHaveStyle('opacity: 0.5');
  });
});