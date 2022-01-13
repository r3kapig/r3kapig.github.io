// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'assets/components/tree.js',
  external: ['@antv/g6'],
  output: {
    file: 'assets/js/tree.js',
    format: 'umd',
    globals: {
      '@antv/g6': 'G6',
    }
  },
  plugins: [
    json(),
    nodeResolve({
      extensions: [".js"],
      browser: true
    }),
    babel({
      presets: ["@babel/preset-env"]
    }),
    commonjs(),
    terser(),
  ],
};
