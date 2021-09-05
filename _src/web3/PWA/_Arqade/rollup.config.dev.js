/* eslint-disable no-undef */
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import copy from "rollup-plugin-copy";
import html from "@open-wc/rollup-plugin-html";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import scss from 'rollup-plugin-scss';
import typescript from "@rollup/plugin-typescript";

const designSystemOpts = {
  preserveSymlinks: true,
  plugins: [
    resolve(),
    resolve({ 'moduleDirectories': ["./node_modules"] }),
    babel({
      babelHelpers: 'bundled',
      babelrc: false,
      // forgetting the '**' below will cause no end of sorrow ... remember it in future integrations
      exclude: ['node_modules/**', '../../../utils/DesignSystem/node_modules/**'],
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": "last 1 version",
            shippedProposals: true,
            useBuiltIns: 'usage',
            corejs: '3',
          }
        ]
      ],
      "plugins": [
        [
          "@babel/plugin-proposal-decorators",
          {
            "decoratorsBeforeExport": true,
            "legacy": false
          }
        ],
        [
          "@babel/plugin-proposal-class-properties",
          {
            "loose": false
          }
        ],
        '@babel/plugin-transform-shorthand-properties',
        '@babel/plugin-transform-block-scoping',
        [
          '@babel/plugin-proposal-private-methods',
          {
            "loose": false
          }
        ],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": false }],
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-syntax-dynamic-import',
        [
          '@babel/plugin-proposal-object-rest-spread',
          { loose: true, useBuiltIns: true }
        ],
        '@babel/plugin-transform-classes',
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-transform-parameters',
        '@babel/plugin-transform-destructuring',
        '@babel/plugin-transform-spread',
        '@babel/plugin-transform-for-of',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-transform-react-jsx',
        '@emotion',
      ]
    }),
    commonjs(),
  ]
};
const typeScriptOpts = {
  plugins: [
    resolve(),
    // depending on amount of content/cached/etc
    // - it may take 2 - 3 `yarn dev`s for the stylesheet to be copied correctly
    scss({
      includePaths: ['no_modules/_styles/downquark.scss'],
      output: '_src/content/assets/styles/dq.css',
    }),
    html(),
    typescript({
      tsconfig: "tsconfig.dev.json",
      exclude: ["*.js"]
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      )
    }),
    copy({
      // if build styles are incorrect make sure newest sheet is here:
      // _src/web3/PWA/_Qrypto/_build_dev/assets/styles/dq.css
      // if not - rerun `yarn dev`
      targets: [
        { src: "_src/content/assets/**/*", dest: "_build_dev/assets/" },
        { src: "manifest.json", dest: "_build_dev/" },
      ],
    }),
  ],
};

export default [
  {
    input: {
      'tmplt/app-shell': './no_modules/_components/templates/app-shell.js',
      'tmplt/default': './no_modules/_components/templates/default.js',
      'tmplt/totem': './no_modules/_components/templates/totem.js',
    },
    output: {
      dir: '_src/_qomponents/',
      sourcemap: true,
    },
    ...designSystemOpts,
  },
  {
    input: "index.html",
    output: {
      dir: "_build_dev",
      format: "es",
    },
    ...typeScriptOpts
  },]
