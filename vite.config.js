import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // keep this if you’re using React
import tailwindcss from '@tailwindcss/vite' // <-- import Tailwind plugin

export default defineConfig({
  plugins: [
    react(),          // keep React plugin
    tailwindcss(),    // <-- add Tailwind plugin here
  ],
})
