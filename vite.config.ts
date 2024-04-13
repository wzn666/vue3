import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { replaceHoistNodePlugin } from "./VHasPermission-main"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [replaceHoistNodePlugin(), vue(),],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/base.scss";`
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
