import type { Meta, StoryObj } from '@storybook/nextjs';
import CatCard from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

const meta: Meta<typeof CatCard> = {
  title: 'cards/CatCard',
  component: CatCard,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CatCard>;

export const Base: Story = {
  args: {
    ...mockCatCardProps.base,
  },
};
