import type { Meta, StoryObj } from '@storybook/nextjs';
import SidebarLayout from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

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
