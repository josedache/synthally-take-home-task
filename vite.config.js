import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      apis: path.resolve(__dirname, "src/apis"),
      assets: path.resolve(__dirname, "src/assets"),
      common: path.resolve(__dirname, "src/common"),
      configs: path.resolve(__dirname, "src/configs"),
      constants: path.resolve(__dirname, "src/constants"),
      features: path.resolve(__dirname, "src/features"),
      hooks: path.resolve(__dirname, "src/hooks"),
      libs: path.resolve(__dirname, "src/libs"),
      pages: path.resolve(__dirname, "src/pages"),
      uis: path.resolve(__dirname, "src/uis"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [react()],
});
