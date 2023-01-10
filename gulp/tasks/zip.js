const { src, dest } = require('gulp');
const del = require('del');
const path = require('path');
const rootFolder = path.basename(path.resolve());
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const zip = require('gulp-zip');
const { _dist, _src } = require('../gulp.config')();

const zipFiles = () => {
  del.sync([`${_dist.root}/*.zip`]);
  src(`${_dist.root}/**/*.*`, {})
    .pipe(
      plumber(
        notify.onError({
          title: 'ZIP',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(zip(`${rootFolder}-build.zip`))
    .pipe(dest(_dist.root));
  return src(`${_src.root}/**/*.*`, {})
    .pipe(
      plumber(
        notify.onError({
          title: 'ZIP',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(zip(`${rootFolder}-source.zip`))
    .pipe(dest(_dist.root));
};

module.exports = zipFiles;
