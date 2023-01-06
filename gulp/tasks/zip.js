const { src, dest } = require('gulp');
const del = require('del');
const path = require('path');
const rootFolder = path.basename(path.resolve());
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const zip = require('gulp-zip');
const { _build, _src } = require('../gulp.config')();

const zipFiles = () => {
  del.sync([`${_build.root}/*.zip`]);
  src(`${_build.root}/**/*.*`, {})
    .pipe(
      plumber(
        notify.onError({
          title: 'ZIP',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(zip(`${rootFolder}-build.zip`))
    .pipe(dest(_build.root));
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
    .pipe(dest(_build.root));
};

module.exports = zipFiles;
