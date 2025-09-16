import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        accent: '#3b82f6',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, #0b1220 0%, #111827 100%)',
      },
    },
  },
  plugins: [react(),tailwindcss(),
],
})
