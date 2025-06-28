import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
//import { terser } from 'rollup-plugin-terser'; // For minification


export default {
  input: "assets/js/main.js", // Entry point
  output: {
    file: "_site/assets/js/bundle.js", // Output for Jekyll
    format: "iife", // Browser-compatible
    name: "app", // Optional global var
  },
  plugins: [
    nodeResolve(), // Handles `node_modules`
    commonjs(), // Converts CommonJS → ES6
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**", // Only compile our source code
      presets: ["@babel/preset-env"], // Transpile modern JS
    }),
  ],
};
