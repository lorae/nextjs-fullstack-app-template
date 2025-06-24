import type { Meta, StoryObj } from '@storybook/nextjs';
import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

const meta: Meta<typeof BaseTemplate> = {
  title: 'sidebar/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof BaseTemplate>;

export const Base: Story = {
  args: {
    ...mockBaseTemplateProps.base,
  },
};
