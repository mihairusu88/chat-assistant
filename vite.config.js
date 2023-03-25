import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig( {
    plugins: [ vue(), svgLoader( {
        svgo: false
    } ) ],
    server: {
        port: 8080,
    },
    preview: {
        port: 8081
    },
    resolve: {
        alias: {
            '@': fileURLToPath( new URL( './src', import.meta.url ) ),
            '@nodeModules': fileURLToPath( new URL( './node_modules', import.meta.url ) ),
            '@assets': fileURLToPath( new URL( './src/assets', import.meta.url ) ),
            '@components': fileURLToPath( new URL( './src/components', import.meta.url ) ),
            '@layouts': fileURLToPath( new URL( './src/layouts', import.meta.url ) ),
            '@helpers': fileURLToPath( new URL( './src/helpers', import.meta.url ) ),
            '@routes': fileURLToPath( new URL( './src/routes', import.meta.url ) ),
            '@scss': fileURLToPath( new URL( './src/scss', import.meta.url ) ),
            '@views': fileURLToPath( new URL( './src/views', import.meta.url ) ),
            '@utils': fileURLToPath( new URL( './src/utils', import.meta.url ) ),
            '@themeColors': fileURLToPath( new URL( './src/scss/theme/_colors.scss', import.meta.url ) ),
            '@themeMixins': fileURLToPath( new URL( './src/scss/mixins/_index.scss', import.meta.url ) ),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import '@scss/theme/_colors.scss'; 
                    @import '@scss/mixins/_index.scss';
                `
            }
        }
    }
} );

