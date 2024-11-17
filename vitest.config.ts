import { defineConfig } from 'vitest/config';

export default defineConfig({
  optimizeDeps: {
    exclude: ['daisyui-devtools'],
  },
  test: {
    // ... Specify options here.
    globals: true,
    coverage: {
      include: ['src/**/*'],
    },
  },
});
