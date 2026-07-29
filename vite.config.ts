import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    // generate AVIF/WebP variants for imported images (applies at build-time)
    imagetools({
      defaultDirectives: (url) => {
        // apply to static image files only
        if (/\.(jpe?g|png)$/i.test(url.pathname)) {
          return new URLSearchParams({ format: 'avif;webp', quality: '80' })
        }
        return new URLSearchParams()
      }
    }),
    // pre-compress assets (gzip + brotli) for static hosting
    compression({ algorithm: 'gzip' }),
    compression({ algorithm: 'brotliCompress' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react'
            if (id.includes('three') || id.includes('@react-three')) return 'vendor-three'
            if (id.includes('gsap')) return 'vendor-gsap'
            if (id.includes('motion')) return 'vendor-motion'
            if (id.includes('lucide-react') || id.includes('react-icons')) return 'vendor-icons'
            return 'vendor'
          }
        }
      }
    }
  }
})
