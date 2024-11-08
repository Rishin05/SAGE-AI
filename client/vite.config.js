import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5173, // Use 5173 as a fallback for local development
    host: true, // Needed for Render to detect the correct port
  },
  plugins: [react()],
})
