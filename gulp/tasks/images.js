const { src, dest } = require('gulp');
const ifEnv = require('gulp-if-env');
const image = require('gulp-imagemin');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const { _src, _dist, prod } = require('../gulp.config')();

const images = () => {
  // Webp
  src([_src.images])
    .pipe(webp({ quality: 90 }))
    .pipe(dest(_dist.images));

  // Avif
  src([_src.images]).pipe(avif()).pipe(dest(_dist.images));

  // Image quality
  return src([_src.images])
    .pipe(
      ifEnv(
        'production',
        image([
          image.mozjpeg({
            quality: 80,
            progressive: true,
          }),
          image.optipng({
            optimizationLevel: 2,
          }),
        ])
      )
    )
    .pipe(dest(_dist.images));
};

module.exports = images;
