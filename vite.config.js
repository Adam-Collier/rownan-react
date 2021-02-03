import reactRefresh from '@vitejs/plugin-react-refresh'
import { join } from 'path'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
const root = join(__dirname, 'src/render')

const config = {
  jsx: 'react',
  root,
  plugins: [reactRefresh()],
  build: {
    outDir: join('../../build'),
    emptyOutDir: true,
  },
}

export default config
