import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(),
    tailwindcss(
     {
        keyframes:
        {
          Blob:{
            '0%':{tranform: 'scale(1)'},
            '33%':{tranform: 'scale(1)'},
            '66%':{tranform: 'scale(1)'},
            '100%':{tranform: 'scale(1)'},

          },
        },
        animation:{
          Blob:'blob 10s infinite',
        }
      }
    ),
  ],
})
=======
  plugins: [react(), tailwindcss()],
})
>>>>>>> 120b535 (re design portfolio)
