const { src, dest, watch, series, parallel } = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
// const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const del = require('del');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

// Paths
const paths = {
  html: {
    src: 'src/html/**/*.html',
    dest: 'dist/'
  },
  styles: {
    src: 'src/scss/main.scss',
    watch: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/'
  },
  images: {
    src: 'src/img/**/*',
    dest: 'dist/img/'
  },
  fonts: {
    src: 'src/fonts/**/*',
    dest: 'dist/fonts/'
  }
};

// clean
function clean() {
  return del(['dist/**', '!dist']);
}

// html (file include)
function html() {
  return src(['src/html/*.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file' // относительные пути
    }))
    .pipe(dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// styles (sass -> css, sourcemaps, autoprefixer) — no minify
function styles() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    // .pipe(cleanCSS({ level: 2 }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// scripts (webpack)
function scripts() {
  // webpack config already outputs to dist/js/[name].bundle.js
  return src('src/js/main.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// copy images
function images() {
  return src(paths.images.src, { encoding: false })
    .pipe(dest(paths.images.dest))
    .pipe(browserSync.stream());
}

// copy fonts
function fonts() {
  return src(paths.fonts.src, { encoding: false })
    .pipe(dest(paths.fonts.dest))
    .pipe(browserSync.stream());
}

// watch + serve
function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    port: 3000,
    open: true,
    notify: false
  });

  watch('src/html/**/*.html', html);
  watch(paths.styles.watch, styles);
  watch(paths.scripts.src, scripts);
  watch(paths.images.src, images);
  watch(paths.fonts.src, fonts);
}

// build (production-like but without minification per your request)
const build = series(clean, parallel(html, styles, scripts, images, fonts));

exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.build = build;
exports.default = series(build, serve);
