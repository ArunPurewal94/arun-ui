// vite.config.ts
import vue from "file:///C:/Users/arunp/Documents/apps/arun-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/arunp/Documents/apps/arun-ui/node_modules/.pnpm/vite@4.4.9/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/arunp/Documents/apps/arun-ui/node_modules/.pnpm/vite-plugin-dts@3.5.3_typescript@5.2.2_vite@4.4.9/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
      name: "@arunpurewal-ui"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "vue"
        }
      }
    }
  },
  plugins: [vue(), dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhcnVucFxcXFxEb2N1bWVudHNcXFxcYXBwc1xcXFxhcnVuLXVpXFxcXHBhY2thZ2VzXFxcXHVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhcnVucFxcXFxEb2N1bWVudHNcXFxcYXBwc1xcXFxhcnVuLXVpXFxcXHBhY2thZ2VzXFxcXHVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hcnVucC9Eb2N1bWVudHMvYXBwcy9hcnVuLXVpL3BhY2thZ2VzL3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL21haW4udHNcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgbmFtZTogXCJAYXJ1bnB1cmV3YWwtdWlcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJ2dWVcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIFZ1ZTogXCJ2dWVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3Z1ZSgpLCBkdHMoKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVYsT0FBTyxTQUFTO0FBQ3JXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUdoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsSUFBSTtBQUFBLE1BQ2QsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
