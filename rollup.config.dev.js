import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss";
import postcssLessLoader from "rollup-plugin-postcss-webpack-alias-less-loader";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.js",
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
    json(),
    postcss({
      extract: false,
      loaders: [
        postcssLessLoader({
          nodeModulePath: "./node_modules",
          aliases: {},
        }),
      ],
    }),
    serve({
      open: false,
      verbose: true,
      contentBase: ["", "dist", "public"],
      historyApiFallback: true,
      host: "localhost",
      port: 4100,
    }),
    livereload({ watch: "dist" }),
  ],
  output: {
    file: "dist/bundle.dev.js",
    format: "esm",
    inlineDynamicImports: true,
    sourcemap: true,
  },
};
