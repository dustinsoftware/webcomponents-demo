import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-card-manager.ts',
      formats: ['es']
    },
    rollupOptions: {
    }
  }
})
