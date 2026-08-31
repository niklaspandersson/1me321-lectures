import { defineConfig } from 'vite'

// Slidev merges this into its own Vite config.
// Needed so the dev server can be reached through the cluster ingress:
// Vite blocks unknown Host headers by default, and HMR must be told to
// dial back over WSS on 443 rather than the local port.
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3030,
    allowedHosts: ['demo.niklaspandersson.se'],
    hmr: {
      protocol: 'wss',
      host: 'demo.niklaspandersson.se',
      clientPort: 443,
    },
  },
})
