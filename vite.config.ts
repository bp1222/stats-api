/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const entrypoint = resolve(__dirname, './src/index.ts');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: entrypoint,
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      input: entrypoint,
    },
  },
  plugins: [
    dts({
      exclude: ['vite.*', 'node_modules/**', 'test/**'],
      compilerOptions: {
        declarationMap: true,
      },
      rollupTypes: true,
    }),
  ],
});