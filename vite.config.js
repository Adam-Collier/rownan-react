import reactRefresh from '@vitejs/plugin-react-refresh'
import { join } from 'path'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
const root = join(__dirname, 'src/render')

const config = {
  jsx: 'react',
  base: './',
  root,
  plugins: [reactRefresh()],
  build: {
    outDir: join('../../build'),
    emptyOutDir: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reactSyntaxHighlighter: ['react-syntax-highlighter'],
          reactBeautifulDnD: ['react-beautiful-dnd'],
          codeMirror: ['codemirror']
        }
      }
    }
  }
}

export default config
