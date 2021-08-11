/* eslint-disable no-undef */
import resolve from "@rollup/plugin-node-resolve";
import html from "@open-wc/rollup-plugin-html";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const designSystemOpts = {
  preserveSymlinks: true,
  plugins: [
    resolve(),
    resolve({ 'moduleDirectories': ["./node_modules"] }),
    babel({
      babelHelpers: 'bundled',
      babelrc: false,
      // forgetting the '**' below will cause no end of sorrow ... rember it in future integrations
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
        // [
        // 	"@babel/plugin-transform-runtime",
        // 	{
        // 		"absoluteRuntime": "/Users/jmelnick/Documents/_dev/_levelshare/frontend/core/ApplicationBrowser/.yarn/cache/node_modules/@babel/runtime-corejs3",
        // 	}
        // ],
        '@emotion',
      ]
    }),

    commonjs(),
  ]
};
const typeScriptOpts = {
  plugins: [
    resolve(),
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
      targets: [
        { src: "assets/**/*", dest: "_dist/assets/" },
        { src: "styles/global.css", dest: "_dist/styles/" },
        { src: "manifest.json", dest: "_dist/" },
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
    ...designSystemOpts
  },
  {
    input: "index.html",
    output: {
      dir: "_dist",
      format: "es",
    },
    ...typeScriptOpts
  },]
