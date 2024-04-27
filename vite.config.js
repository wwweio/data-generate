import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //set port
    port: 3000,
    //set open web page when start. / => localhost:3000/
    open: '/',
  },
  resolve: {
    alias: {
      //set path alias
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
