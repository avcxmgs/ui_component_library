import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import HeroImage from './HeroImage';

const meta = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },

} satisfies Meta<typeof HeroImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/1200x300',
    alt: 'Default Hero Image',
    text: 'Hero Image',
    disabled: false,
  },
};

export const Disabled: Story = {
    args: {
      src: 'https://placehold.co/1200x300',
      alt: 'Disabled Hero Image',
      text: 'Disabled Hero Image',
      disabled: true,
    },
  };
