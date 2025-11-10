const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const del = require('del');

// ===== Очистка dist =====
function clean() {
  return del(['dist/**/*']);
}

// ===== HTML include =====
function html() {
  return gulp.src(['src/html/**/*.html', '!src/html/partials/**/*'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
}

// ===== SCSS: стили проекта =====
function scssStyle() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
}

// ===== Вендоры: CSS =====
function vendorsCss() {
  return gulp.src([
    'node_modules/swiper/swiper-bundle.min.css',
    'node_modules/@fancyapps/ui/dist/fancybox/fancybox.css'
  ])
  .pipe(gulp.dest('src/css/'));
}

// ===== Вендоры: JS =====
function vendorsJs() {
  return gulp.src([
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js',
    'node_modules/imask/dist/imask.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
  ])
  .pipe(gulp.dest('src/js/'));
}

// ===== Копирование css/ =====
function css() {
  return gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
}

// ===== Копирование js/ =====
function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.stream());
}

// ===== Копирование img/ =====
function images() {
  return gulp.src('src/img/**/*', { encoding: false })
    .pipe(gulp.dest('dist/img/'))
    .pipe(browserSync.stream());
}

// ===== Копирование fonts/ =====
function fonts() {
  return gulp.src('src/fonts/**/*', { encoding: false })
    .pipe(gulp.dest('dist/fonts/'))
    .pipe(browserSync.stream());
}

// ===== Сервер BrowserSync =====
function serve() {
  browserSync.init({
    server: {
      baseDir: "dist/"
    },
    port: 3000,
    open: true,
    notify: false
  });
}

// ===== Наблюдение за изменениями =====
function watch() {
  gulp.watch('src/html/**/*.html', html);
  gulp.watch('src/scss/**/*.scss', scssStyle);
  gulp.watch('src/css/**/*.css', css);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/img/**/*', images);
  gulp.watch('src/fonts/**/*', fonts);
}

// ===== Сборка =====
const build = gulp.series(clean, gulp.parallel(html, scssStyle, css, scripts, images, fonts));

// ===== Разработка =====
const dev = gulp.series(build, gulp.parallel(serve, watch));

// ===== Объединённая задача для вендоров =====
const vendors = gulp.parallel(vendorsCss, vendorsJs);

// ===== Экспорт задач =====
exports.clean = clean;
exports.html = html;
exports.scssStyle = scssStyle;
exports.css = css;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.vendors = vendors; // Выполнить один раз
exports.build = build;
exports.dev = dev;
exports.default = dev;