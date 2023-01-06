const { src, dest, task } = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const ifEnv = require('gulp-if-env');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const { _src, _build, prod, backend } = require('../gulp.config')();

const styles = () => {
  return src(_src.scss, { sourcemaps: !prod && !backend })
    .pipe(
      plumber(
        notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: ['last 5 versions'],
      })
    )
    .pipe(ifEnv('production', postcss()))
    .pipe(dest(_build.css, !prod && !backend ? { sourcemaps: '.' } : ''))
    .pipe(browserSync.stream());
};

module.exports = styles;
