import type { Meta, StoryObj } from '@storybook/nextjs';
import SidebarLayout, { mockSidebarLayoutProps } from './SidebarLayout';

const meta: Meta<typeof SidebarLayout> = {
  title: 'sidebar/SidebarLayout',
  component: SidebarLayout,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SidebarLayout>;

export const Base: Story = {
  args: {
    ...mockSidebarLayoutProps.base,
  },
};
