import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    proxy: {
      '/php': {
        target: "http://localhost",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/php/, "/personal_projects/Superbowl_Fundraiser_React/SB-Fundraiser-React-Refactor/my-react-router-app/server"),
      }
    }
  }
});
