const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const ttf2svg = require('gulp-ttf-svg');
const ttf2eot = require('gulp-ttf2eot');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const { _src, _build } = require('../gulp.config')();

const fonts = () => {
  src(_src.fonts)
    .pipe(rename(path => (path.basename = path.basename.toLowerCase())))
    .pipe(dest(_build.fonts));
  src(_src.fonts)
    .pipe(ttf2svg())
    .pipe(rename(path => (path.basename = path.basename.toLowerCase())))
    .pipe(dest(_build.fonts));
  src(_src.fonts)
    .pipe(ttf2eot())
    .pipe(
      rename(function (path) {
        path.basename = path.basename.toLowerCase();
      })
    )
    .pipe(dest(_build.fonts));
  src(_src.fonts)
    .pipe(ttf2woff())
    .pipe(rename(path => (path.basename = path.basename.toLowerCase())))
    .pipe(dest(_build.fonts));
  return src(_src.fonts)
    .pipe(ttf2woff2())
    .pipe(rename(path => (path.basename = path.basename.toLowerCase())))
    .pipe(dest(_build.fonts));
};

module.exports = fonts;
