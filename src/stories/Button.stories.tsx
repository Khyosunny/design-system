import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default = {
  args: {
    label: 'zz',
  },
};
