const esbuildPluginTsc = require('esbuild-plugin-tsc');
const esbuild = require('esbuild');

esbuild.build({
  platform: 'node',
  target: ['node18'],
  bundle: true,
  minify: true,
  sourcemap: true,
  entryPoints: ['src/main.ts'],
  outdir: 'dist',
  plugins: [esbuildPluginTsc({ force: true })],
}).catch(() => process.exit(1));
