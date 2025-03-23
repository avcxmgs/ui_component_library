import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Label from './Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    htmlFor: { control: 'text' },
    disabled: { control: 'boolean' },
  },

} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
    disabled: false,
  },
};

export const Disabled: Story = {
    args: {
      children: 'Disabled Label',
      disabled: true,
    },
  };
