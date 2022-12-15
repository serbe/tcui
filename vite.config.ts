import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'TCUIlib',
      // the proper extensions will be added
      formats: ['es', 'umd'],
      fileName: 'tcui-lib',
    },
  },
  plugins: [
    dts({
      // include: ["src/component/"],
    }),
    react(),
    tsconfigPaths(),
  ],
}))
