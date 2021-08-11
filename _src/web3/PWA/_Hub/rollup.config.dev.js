import resolve from "@rollup/plugin-node-resolve";
import html from "@open-wc/rollup-plugin-html";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';


// export default {
const designSystemOpts = {
  preserveSymlinks: true,
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      babelrc: false,
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": "last 1 version",
            shippedProposals: true,
            useBuiltIns: 'usage',
            corejs: '3',
            loose: true,
          }
        ]
      ],
      "plugins": [
        [
          "@babel/plugin-proposal-decorators",
          {
            "decoratorsBeforeExport": false,
            "legacy": false
          }
        ],
        [
          "@babel/plugin-proposal-class-properties",
          {
            "loose": true
          }
        ],
        '@babel/plugin-transform-shorthand-properties',
        '@babel/plugin-transform-block-scoping',
        [
          '@babel/plugin-proposal-private-methods',
          {
            "loose": true
          }
        ],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
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
      exclude: "*.js"
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
  // {
  //   input: {
  //     'orgnsm/header': './src/script/components/organisms/header.js',
  //     // 'modules/integration': './__unrolled/webcomponents/mjs/modules/integration.js',
  //     // 'modules/status': './__unrolled/webcomponents/mjs/modules/status.js',
  //     // 'modules/task': './__unrolled/webcomponents/mjs/modules/task.js',
  //     // 'components/dashboard': './__unrolled/webcomponents/mjs/components/dashboard.js',
  //     // 'components/task-demo': './__unrolled/webcomponents/mjs/components/task-demo.js',
  //     // 'components/status': './__unrolled/webcomponents/mjs/components/status.js'
  //   },
  //   output: {
  //     dir: 'src/script/_compiled/',
  //     // dir: '_dist/assets/js/webcomponents/',
  //     // dir: '_app/assets/js/webcomponents/',
  //     sourcemap: true
  //   },
  //   ...designSystemOpts
  // },
  {
    input: "index.html",
    output: {
      dir: "_dist",
      format: "es",
    },
    ...typeScriptOpts
  },]
