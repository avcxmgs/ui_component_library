import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: { control: 'object'},
    disabled: { control: 'boolean' },
  },

} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
        {value: 'd1', label: 'Default 1'},
        {value: 'd2', label: 'Default 2'},
        {value: 'd3', label: 'Default 3'}
    ],
    disabled: false,
  },
};

export const Disabled: Story = {
    args: {
    items: [
        {value: 'd1', label: 'Default 1'},
        {value: 'd2', label: 'Default 2'},
        {value: 'd3', label: 'Default 3'}
    ],
      disabled: true,
    },
  };
