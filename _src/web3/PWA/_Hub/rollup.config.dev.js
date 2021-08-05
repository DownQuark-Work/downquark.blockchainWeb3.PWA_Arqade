import resolve from "@rollup/plugin-node-resolve";
import html from "@open-wc/rollup-plugin-html";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "index.html",
  output: {
    dir: "_dist",
    format: "es",
  },
  plugins: [
    resolve(),
    html(),
    typescript({
      tsconfig: "tsconfig.dev.json",
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
