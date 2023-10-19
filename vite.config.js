import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default defineConfig({
    build: {
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
    },
    plugins: [
        laravel({
            input: [
                // 'resources/css/app.css',
                'resources/scss/styles.scss',
                'resources/css/asyncGallery.css',
                // 'resources/css/swiper-bundle.min.css',
                // 'resources/css/video-js.css',
                'resources/js/app.js',
                // 'resources/js/swiper-bundle.min.js',
                // 'resources/js/swiper.js',
                'resources/js/script.js',
                'resources/js/asyncGallery.js',
            ],
            buildDirectory: 'bundle',
            refresh: true,
        }),
    ],
});
