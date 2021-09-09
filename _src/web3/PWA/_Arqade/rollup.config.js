/* eslint-disable no-undef */
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import html from "@open-wc/rollup-plugin-html";
import replace from "@rollup/plugin-replace";
import strip from "@rollup/plugin-strip";
import copy from "rollup-plugin-copy";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "_build_dev/arqade.html",
  output: {
    dir: "_build_deploy",
    format: "es",
  },
  plugins: [
    resolve(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      ),
    }),
    html(),
    typescript({
      tsconfig: "tsconfig.json"
    }),
    terser(),
    strip({
      functions: ["xconsole.log"],
    }),
    copy({
      targets: [
        { src: "_src/content/assets/**/*", dest: "_build_deploy/assets/" },
        { src: "manifest.json", dest: "_build_deploy/" },
        { src: "sw.js", dest: "_build_deploy/" },
      ],
    }),
  ],
};
