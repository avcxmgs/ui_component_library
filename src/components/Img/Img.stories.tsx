import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Img from './Img';

const meta = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },

} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/400',
    alt: 'Default Img',
    disabled: false,
  },
};

export const Disabled: Story = {
    args: {
      src: 'https://placehold.co/400',
      alt: 'Disabled Img',
      disabled: true,
    },
  };
