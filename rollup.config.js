import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

/** @returns {import('rollup').RollupOptions} */
export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/ui.cjs.js",
      format: "cjs",
      interop: "auto",
    },
    {
      file: "dist/ui.esm.js",
      format: "esm",
      interop: "esModule",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [resolve(), commonjs(), typescript()],
};
