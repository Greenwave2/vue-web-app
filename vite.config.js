import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// element-plus auto import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
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
  plugins: [
    vue(), 
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
