const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpackStream = require('webpack-stream');
const browserSync = require('browser-sync');
const { _src, prod, backend, _dist } = require('../gulp.config')();

const scripts = () => {
  return src(_src.jsIndex)
    .pipe(
      plumber(
        notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      webpackStream(require('../../webpack.config'))
    )
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(dest(_dist.js))
    .pipe(browserSync.stream());
};

module.exports = scripts;
