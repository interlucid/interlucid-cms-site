import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// {
//     ignoredRouteFiles: ['.*', '**/*.css', '**/*.test.{js,jsx,tx,tsx}'],
// }

export default defineConfig({
    plugins: [
        reactRouter(),
        tsconfigPaths(),
    ],
});
