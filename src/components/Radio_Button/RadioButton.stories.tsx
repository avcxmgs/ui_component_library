import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },

} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Radio Button',
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
    args: {
      label: 'Disabled Radio Button',
      checked: false,
      disabled: true,
    },
  };
