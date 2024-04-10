import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRedux from 'react-redux'

export default defineConfig({
  plugins: [
    react(),
    reactRedux() // استخدام react-redux ك plugin
  ]
})
