// import './bootstrap';

// import Swiper JS
import Swiper from 'swiper/bundle';
// import videojs from 'video.js/dist/video.js';
// import Swiper styles
import 'swiper/css/bundle';
// import 'video.js/src/css/video-js.scss';
window.Swiper = Swiper; // Prevents removal from tree-shaking. Vite workaround. When function is called from a blade template, within <script> -tag
//window.videojs = videojs; // Prevents removal from tree-shaking. Vite workaround. When function is called from a blade template, within <script> -tag
