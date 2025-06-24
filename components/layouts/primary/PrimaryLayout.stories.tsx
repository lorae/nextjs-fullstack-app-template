import type { Meta, StoryObj } from '@storybook/nextjs';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

const meta: Meta<typeof PrimaryLayout> = {
  title: 'layouts/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PrimaryLayout>;

export const Base: Story = {
  args: {
    ...mockPrimaryLayoutProps.base,
  } as IPrimaryLayout,
};
