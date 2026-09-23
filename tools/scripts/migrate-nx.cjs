const { spawnSync } = require('node:child_process');

const result = spawnSync(
  process.execPath,
  [require.resolve('nx/bin/nx'), 'migrate', ...process.argv.slice(2)],
  {
    stdio: 'inherit',
    env: { ...process.env, NX_MIGRATE_USE_LOCAL: 'true' },
  },
);

if (result.error) {
  console.error(result.error);
}
process.exitCode = result.status ?? 1;
