import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_APP_API_KEY': JSON.stringify('20f6e5d8fa4a472c8a26388757f8ba70')
  }
})
