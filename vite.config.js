import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue()],
    base: './',
    build: {
        rollupOptions: {
            output: {
                // dir: '~/plugin/assets/',
                entryFileNames: 'csrf-app.js',
                assetFileNames: 'csrf-app.css',
                chunkFileNames: "chunk.js",
                manualChunks: undefined,
            }
        }
    },
    resolve: {
        alias: {
            "src": '/src/',
            "components": '/src/components/'
        }
    }
}