import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin(),
    visualizer({
      filename: 'analyse.html',   // Nome del file di output (si troverà nella root del progetto)
      template: 'network',        // Tipo di visualizzazione ('treemap', 'sunburst', 'network')
      open: true,                 // Apre automaticamente il report nel browser dopo la build
      gzipSize: true,             // Mostra la dimensione compressa con gzip
      brotliSize: true,           // Mostra la dimensione compressa con brotli
      emitFile: true,
      sourcemap: true
    }),
  ],
  build: {
    outDir: 'dist',               // Specifica la directory di output
    sourcemap: true,              // Abilita i sourcemap (opzionale, utile per il debug)
    rollupOptions: {
      // Altre opzioni di Rollup se necessarie
    },
  },
});
