import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production'
  // ? '/kaso-agri/'
  // : '/',
  define: {
    // i18n warning 處理
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }, 
  plugins: [vue()]
})
