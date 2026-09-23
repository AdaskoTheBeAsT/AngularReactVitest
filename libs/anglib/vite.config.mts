/// <reference types="vitest" />
import { defineConfig } from 'vite';

import angular from '@analogjs/vite-plugin-angular';
import * as path from 'path';

const project = 'libs/anglib';
const reportPath = `../../.reports/${project}/`;

export default defineConfig(({ mode }) => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/libs/anglib',
  resolve: { tsconfigPaths: true },
  plugins: [angular({ tsconfig: path.join(import.meta.dirname, 'tsconfig.spec.json') })],
  test: {
    name: 'anglib',
    watch: false,
    globals: true,
    setupFiles: ['src/test-setup.ts'],
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: [
      'default',
      ['html', { outputFile: `${reportPath}html/index.html` }],
      ['junit', { outputFile: `${reportPath}report.junit.xml` }],
      [
        'vitest-sonar-reporter',
        {
          outputFile: `${reportPath}report.sonar.xml`,
          onWritePath(reportPath: string) {
            // Prefix all paths with root directory
            // e.g. '<file path="test/math.ts">' to '<file path="frontend/test/math.ts">'
            return path.relative('../..', reportPath);
          },
        },
      ],
    ],
    coverage: {
      reportsDirectory: `${reportPath}coverage`,
      provider: 'v8',
      enabled: true,
    },
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
