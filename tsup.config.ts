import type { Options } from 'tsup'

import pkg from './package.json'

const external = [
  ...Object.keys(pkg.dependencies || {}),
]

export default <Options>{
  entryPoints: ['src/index.ts'],
  outDir: 'dist',
  target: 'esnext',
  format: ['esm'],
  clean: true,
  dts: true,
  minify: true,
  noExternal: external,
  skipNodeModulesBundle: false,
  banner: {
    js: 'const require = (await import(\'node:module\')).createRequire(import.meta.url);const __filename = (await import(\'node:url\')).fileURLToPath(import.meta.url);const __dirname = (await import(\'node:path\')).dirname(__filename);',
  },
}
