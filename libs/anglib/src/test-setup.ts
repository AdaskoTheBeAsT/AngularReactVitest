// // @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
// globalThis.ngJest = {
//   testEnvironmentOptions: {
//     errorOnUnknownElements: true,
//     errorOnUnknownProperties: true,
//   },
// };
// import 'jest-preset-angular/setup-jest';

import '@analogjs/vite-plugin-angular/setup-vitest';

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { getTestBed } from '@angular/core/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
