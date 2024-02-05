import { Meta, StoryObj } from '@storybook/react';
import input from './input';

const meta = {
  title: 'common/input',
  component: input,
  args: {},
  argTypes: {},
  decorators: [],
} satisfies Meta<typeof input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
