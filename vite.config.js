import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
const plugins = {
  plugins: [reactRefresh()],
  optimizeDeps: {
    auto: true,
    exclude: ['electron'],
  },
}

export default plugins
