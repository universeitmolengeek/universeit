const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
    

mix.scripts([
    'resources/js/vendor/jquery-2.2.4.min.js',
    'resources/js/vendor/bootstrap.min.js',
    'resources/js/easing.min.js',
    'resources/js/hoverIntent.js',
    'resources/js/superfish.min.js',
    'resources/js/jquery.ajaxchimp.min.js',
    'resources/js/jquery.magnific-popup.min.js',
    'resources/js/jquery.tabs.min.js',
    'resources/js/jquery.nice-select.min.js',
    'resources/js/owl.carousel.min.js',
    'resources/js/main.js',
],'public/js/app.js')

mix.sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'resources/css/linearicons.css',
    'resources/css/font-awesome.min.css',
    'resources/css/bootstrap.css',
    'resources/css/magnific-popup.css',
    'resources/css/nice-select.css',
    'resources/css/animate.min.css',
    'resources/css/owl.carousel.css',
    'resources/css/jquery-ui.css',
    'resources/css/main.css',
    'resources/css/custom.css',
],'public/css/app.css')

mix.copyDirectory('resources/fonts','public/fonts');
mix.copyDirectory('resources/img','public/img');