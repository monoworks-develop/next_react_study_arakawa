import { Meta, StoryObj } from '@storybook/react';
import SimpleButton from './SimpleButton';

const meta: Meta = {
  title: 'SimpleButton',
  component: SimpleButton,
};

export default meta;

type Story = StoryObj<typeof SimpleButton>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
  },
};
