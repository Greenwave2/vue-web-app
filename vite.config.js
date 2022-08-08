import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// import eslintPlugin from 'vite-plugin-eslint'

// element-plus auto import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// Polyfill 用來讓 vite 可以使用 node 內建的 commonjs packages
// import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
// import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig({
  define: {
    // i18n warning 處理
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
      // vite 所需要的 polyfill
      // util: 'rollup-plugin-node-polyfills/polyfills/util',
      // events: 'rollup-plugin-node-polyfills/polyfills/events',
      // stream: 'rollup-plugin-node-polyfills/polyfills/stream',
      // _stream_duplex:
      //           'rollup-plugin-node-polyfills/polyfills/readable-stream/duplex',
      // _stream_passthrough:
      //     'rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough',
      // _stream_readable:
      //     'rollup-plugin-node-polyfills/polyfills/readable-stream/readable',
      // _stream_writable:
      //     'rollup-plugin-node-polyfills/polyfills/readable-stream/writable',
      // _stream_transform:
      //     'rollup-plugin-node-polyfills/polyfills/readable-stream/transform',
      // buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
      // process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
    },
  },
  plugins: [
    vue(),
    // eslintPlugin({
    //   include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    // rollupOptions: {
    //   plugins: [
    //     rollupNodePolyFill(),
    //   ],
    // },
  },
})
