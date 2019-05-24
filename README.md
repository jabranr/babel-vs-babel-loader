# `babel` vs `babel-loader`
Investigating output from `babel` and `babel-loader` which is vastly different from each other.

## Objective
Make a `React` component ready to be published to `npm` as a module. Intended targets are `es6` and `commonjs` modules.

## Usage

### Install dependencies

```
npm install
```

### Start app

Running following command will start the app and watch for changes.

```
npm start
```

Then you can edit `src/index.js` to try each version of the build such as:

### ES6
```diff
- import JoeBloggs from './components/joe-bloggs';
+ import JoeBloggs from './components/joe-bloggs/dist';
```

### CommonJS
```diff
- import JoeBloggs from './components/joe-bloggs';
+ import JoeBloggs from './components/joe-bloggs/dist/cjs';
```

> Please note that any styles will be stripped off in CommonJS version


Details of the issue (now resolved) from this step onwards are [here](https://github.com/jabranr/babel-vs-babel-loader/issues/1)

### Build

```
npm run build
```

This will output results into `dist/`.

## License
MIT License

&copy; Jabran Rafique &ndash; 2019