const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function style() {
    return src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./Dist/css'))
}

function html() {
    return src('./src/**/*.html')
        .pipe(dest('./Dist'))
}

function watcher() {
    watch('./src/**/*.scss', style)
    watch('./src/**/*.html', html)
}


exports.default = parallel(html, style, watcher)
