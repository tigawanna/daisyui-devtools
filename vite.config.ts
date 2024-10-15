import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import analyze from "rollup-plugin-analyzer";
import path from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// import { splashScreen } from "vite-plugin-splash-screen";
// const ReactCompilerConfig = {
//   /* ... */
// };

const _plugins = [
  react({
    // babel: {
    //   plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
    // },
  }),
  ,
  tsconfigPaths(),
  dts({ tsconfigPath: path.resolve(__dirname, "tsconfig.lib.json") }),
  libInjectCss(),
  analyze({
    // highlight the modules with size > 40kb
    filter(moduleObject) {
      return moduleObject.size > 10000;
    },
  }),
];
// https://vitejs.dev/config/
export default defineConfig({
  server: {

  },

  build: {
    sourcemap: true,

    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: _plugins,
});
