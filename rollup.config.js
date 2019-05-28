import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
// import collectSass from 'rollup-plugin-collect-sass';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import postcssModules from 'postcss-modules';
import {uglify} from 'rollup-plugin-uglify';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
  input: './src/components/joe-bloggs/index.js',
  output: [
    {
      file: './src/components/joe-bloggs/dist/index.module.js',
      format: 'esm'
    },
    {
      file: './src/components/joe-bloggs/dist/index.js',
      format: 'cjs'
    }
  ],
  external: ['react', 'react-dom'],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    commonjs({
      include: ["node_modules/**"]
    }),
    resolve(),
    babel({
      exclude: ["node_modules/**"]
    }),
    IS_PRODUCTION && uglify(),
    postcss({
      modules: true
    }),
    sass(),
  ]
};