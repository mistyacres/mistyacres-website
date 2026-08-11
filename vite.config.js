import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'
import fileMetadataPlugin from './plugins/vite-plugin-metadata.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  svgr({ include: "**/*.svg?react" }),
  fileMetadataPlugin({
    targetFiles: [
      'public/assets/tradelist.csv'
    ],
    metadataFile: 'src/fileMetadata.js'
  })
  ],
  usePolling: true,
});
