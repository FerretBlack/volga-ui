import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import { viteStaticCopy } from 'vite-plugin-static-copy'


const stylesSources = `
  @import "@/scss/base.scss";
  @import "@/scss/colors.scss";
`
const scssGlobals = ['base.scss', 'colors.scss']
const copyFileTargets = (files, filePath, destPath) => {
  return files.map(item => ({
    src: `${filePath}/${item}`,
    dest: destPath
  }))
}


export default defineConfig({
  css: {
    requireModuleExtension: false,
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: stylesSources
      }
    }
  },
  build: {
    outDir: `dist/`,
    emptyOutDir: true,
    minify: true,
    lib: {
      entry: pkg.source,
      name: pkg.description,
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: `bundle.[ext]`,
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    viteStaticCopy({
      targets: copyFileTargets(scssGlobals, './src/scss', 'scss')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
