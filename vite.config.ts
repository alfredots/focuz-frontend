import { defineConfig, ViteUserConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/pages',
      generatedRouteTree: './src/routeTree.gen.ts',
      routeFileIgnorePrefix: '-',
      quoteStyle: 'single'
    }),
    react()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './.test/setup.ts'
  }
} as ViteUserConfig);
