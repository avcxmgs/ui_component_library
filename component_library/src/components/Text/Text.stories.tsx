import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Text Area',
    disabled: false,
  },
};

export const Disabled: Story = {
    args: {
      children: 'Disabled Text Area',
      disabled: true,
    },
  };
