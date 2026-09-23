/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';

const project = 'libs/nodlib';
const reportPath = `../../.reports/${project}/`;

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/nodlib',
  resolve: { tsconfigPaths: true },

  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      //skipDiagnostics: true,
    }),
  ],

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/libs/nodlib',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'nodlib',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rolldownOptions: {
      // External packages that should not be bundled into your library.
      //external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },

  test: {
    watch: false,
    globals: true,
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
});
