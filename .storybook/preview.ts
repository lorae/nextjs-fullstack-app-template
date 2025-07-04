import type { Preview } from '@storybook/react';
import '../styles/globals.css';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => [
    key,
    {
      name: key,
      styles: {
        width: `${val}px`,
        height: `${(idx + 5) * 10}vh`,
      },
    },
  ])
) as Record<
  string,
  { name: string; styles: { width: string; height: string } }
>;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },
};

export default preview;
