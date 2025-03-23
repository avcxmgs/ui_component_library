import React from 'react';
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";
import '@testing-library/jest-dom'

describe('HeroImage', () => {
  test('is visible', () => {
    render(<HeroImage src="https://placehold.co/400" alt="Placeholder Hero" text="Hero Image" disabled={false}/>);
    expect(screen.getByAltText('Placeholder Hero')).toBeVisible();
    expect(screen.getByText('Hero Image')).toBeVisible();
  });

  test('opacity changes when disabled', () => {
    render(<HeroImage src="https://placehold.co/400" alt="Placeholder Hero" text="Hero Image" disabled={true}/>);
    expect(screen.getByAltText('Placeholder Hero')).toHaveStyle('opacity: 0.5; cursor: not-allowed');
    expect(screen.getByText('Hero Image')).toHaveStyle('color: gray');
  });
});