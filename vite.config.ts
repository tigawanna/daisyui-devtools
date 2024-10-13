import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import analyze from "rollup-plugin-analyzer";
// import { splashScreen } from "vite-plugin-splash-screen";
const ReactCompilerConfig = {
  /* ... */
};

const _plugins = [
  react({
    babel: {
      plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
    },
  }),
  ,
  tsconfigPaths(),
  analyze({
    // highlight the modules with size > 40kb
    filter(moduleObject) {
      return moduleObject.size > 40000;
    },
  }),
];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: _plugins,
});
