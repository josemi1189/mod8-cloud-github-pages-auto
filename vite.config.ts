import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/mod8-cloud-github-pages-manual/",
  plugins: [tsConfigPaths(), checker({ typescript: true }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/css/variables" as *;',
      },
    },
  },
});
