import { defineConfig } from 'vite'
import path from 'path'
import VueMacros from 'unplugin-vue-macros/vite'
import uni from '@dcloudio/vite-plugin-uni'
import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  // transpileDependencies: ['uview-plus'],
  plugins: [
    commonjs(),
    VueMacros({
      plugins: {
        vue: uni()
      }
    })
  ],
  resolve: {
    alias: {
      '@': pathSrc
    }
  }
})
