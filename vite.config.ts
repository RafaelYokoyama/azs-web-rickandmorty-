import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
  ],
  root: '.',
	base: '/',
	build: {
		chunkSizeWarningLimit: 1024,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor'
					}
				},
			},
		},
  },
  server: {
		port: 5173,
		strictPort: true,
		host: true
	},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
