import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line
      hooks: path.resolve(__dirname, "./src/hooks"),
      // eslint-disable-next-line
      shared: path.resolve(__dirname, "./src/shared"),
      // eslint-disable-next-line
      pages: path.resolve(__dirname, "./src/pages"),
      // eslint-disable-next-line
      src: path.resolve(__dirname, "./src"),
    },
  },
});
