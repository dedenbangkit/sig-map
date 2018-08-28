let mix = require('laravel-mix');

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

mix.js([
    'resources/assets/js/bootstrap.js',
    'resources/assets/js/cluster.js',
    'resources/assets/js/app.js',
    ], 'public/js/app.js')
    .copy('resources/assets/images/', 'public/images/')
    .copy('resources/assets/js/global.js', 'public/js/global.js')
    .copy('node_modules/leaflet/dist/', 'public/vendor/leaflet/')
    .copy('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'public/vendor/fontawesome/css/all.min.css')
    .copy('node_modules/@fortawesome/fontawesome-free/webfonts/', 'public/vendor/fontawesome/webfonts/')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .version();

