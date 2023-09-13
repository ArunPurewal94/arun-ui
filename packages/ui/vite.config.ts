import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
      name: "arun-ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "vue",
        },
      },
    },
  },
  plugins: [vue(), dts()],
});
