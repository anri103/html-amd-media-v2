// ===== Импорт зависимостей =====
import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import { deleteAsync } from "del";
import fileInclude from "gulp-file-include";
import browserSync from "browser-sync";

// ===== Инициализация =====
const sass = gulpSass(dartSass);
const bs = browserSync.create();

// ===== Пути =====
const paths = {
  html: {
    src: ["src/html/**/*.html", "!src/html/partials/**/*"],
    dest: "dist/",
    watch: "src/html/**/*.html",
  },
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
    watch: "src/scss/**/*.scss",
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js/",
    watch: "src/js/**/*.js",
  },
  images: {
    src: "src/img/**/*",
    dest: "dist/img/",
  },
  fonts: {
    src: "src/fonts/**/*",
    dest: "dist/fonts/",
  },
};

// ===== Очистка =====
export const clean = () => deleteAsync(["dist"]);

// ===== HTML include =====
export function html() {
  return gulp
    .src(paths.html.src)
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(paths.html.dest))
    .pipe(bs.stream());
}

// ===== SCSS → CSS =====
export function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(bs.stream());
}

// ===== Копирование JS =====
export function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(bs.stream());
}

// ===== Копирование изображений =====
export function images() {
  return gulp
    .src(paths.images.src, { encoding: false })
    .pipe(gulp.dest(paths.images.dest))
    .pipe(bs.stream());
}

// ===== Копирование шрифтов =====
export function fonts() {
  return gulp
    .src(paths.fonts.src, { encoding: false })
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(bs.stream());
}

// ===== Вендоры из node_modules =====
export function vendor() {
  const vendors = [
    {
      name: "bootstrap",
      files: [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      ],
    },
    {
      name: "jquery",
      files: ["node_modules/jquery/dist/jquery.min.js"],
    },
    {
      name: "swiper",
      files: [
        "node_modules/swiper/swiper-bundle.min.css",
        "node_modules/swiper/swiper-bundle.min.js",
      ],
    },
    {
      name: "fancybox",
      files: [
        "node_modules/@fancyapps/ui/dist/fancybox/fancybox.css",
        "node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js",
      ],
    },
  ];

  const tasks = vendors.map((vendor) => {
    return gulp.src(vendor.files).pipe(gulp.dest(`dist/vendor/${vendor.name}`));
  });

  return Promise.all(tasks);
}

// ===== Сервер и слежка =====
export function serve() {
  bs.init({
    server: { baseDir: "dist/" },
    notify: false,
    port: 3000,
  });

  gulp.watch(paths.html.watch, html);
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.scripts.watch, scripts);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.fonts.src, fonts);
}

// ===== Сборка и режим разработки =====
export const build = gulp.series(
  clean,
  gulp.parallel(html, styles, scripts, images, fonts, vendor)
);

export const dev = gulp.series(build, serve);

export default dev;
