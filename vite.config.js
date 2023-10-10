import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default defineConfig({
    build: {
        // rollupOptions: {
        //     output: {
        //         // Add the names of the functions or variables you want to keep
        //         // separated by commas
        //         keepAlive: ['initPartnerSwiper', 'initTeamMembersSwiper', 'initCasesSwiper']
        //     }
        // }

        // minify: 'esbuild',
        // minify: 'terser',
        // terserOptions: {
        //     compress: false,
        //     mangle: false,
        // }
        // minify: false,
        // esbuild: {
        //     minifyIdentifiers: false
        // },


        // minify: 'terser',
        // terserOptions: {
        //     compress: {
        //         keep_fnames: true,
        //         pure_funcs: ['initPartnerSwiper']
        //     },
        //     mangle: {
        //         // toplevel: true,
        //         keep_fnames: true
        //     }
        // }
    },
    plugins: [
        laravel({
            input: [
                // 'resources/css/app.css',
                'resources/scss/styles.scss',
                'resources/css/swiper-bundle.min.css',
                'resources/css/video-js.css',
                // 'resources/js/app.js',
                // 'resources/js/swiper-bundle.min.js',
                // 'resources/js/swiper.js',
                'resources/js/script.js',
            ],
            buildDirectory: 'bundle',
            refresh: true,
        }),
    ],
});
