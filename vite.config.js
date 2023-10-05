import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        // rollupOptions: {
        //     output: {
        //         // Add the names of the functions or variables you want to keep
        //         // separated by commas
        //         keepAlive: ['initPartnerSwiper', 'initTeamMembersSwiper', 'initCasesSwiper']
        //     }
        // }
        minify: false
    },
    plugins: [
        laravel({
            input: [
                // 'resources/css/app.css',
                'resources/scss/styles.scss',
                'resources/css/swiper-bundle.min.css',
                'resources/css/video-js.css',
                // 'resources/js/app.js',
                'resources/js/swiper-bundle.min.js',
                'resources/js/script.js',
            ],
            buildDirectory: 'bundle',
            refresh: true,
        }),
    ],
});
