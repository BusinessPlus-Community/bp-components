import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials',
  '@storybook/addon-links',],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/components/vite.config.ts',
      },
    },
  },
  staticDirs: [
    {
      from: '../../../tools/assets',
      to: '/assets',
    },
    {
      from: '../../../tools/mocks/mockServiceWorker.js',
      to: '/mockServiceWorker.js',
    },
  ],
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
