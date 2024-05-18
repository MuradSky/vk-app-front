import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue()],
    base: './',
    build: {
        rollupOptions: {
            output: {
                // dir: '~/plugin/assets/',
                entryFileNames: 'choose-card-app.js',
                assetFileNames: 'choose-card-app.css',
                chunkFileNames: "chunk.js",
                manualChunks: undefined,
            }
        }
    }
}