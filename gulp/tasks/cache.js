const { src, dest, task } = require('gulp');
const rev = require('gulp-rev');
const revDel = require('gulp-rev-delete-original');
const { _build } = require('../gulp.config')();

const cache = () => {
  return src(`${_build.root}/**/*.{css,js,svg,png,jpg,jpeg,webp,avif,woff2}`, {
    base: _build.root,
  })
    .pipe(rev())
    .pipe(revDel())
    .pipe(dest(_build.root))
    .pipe(rev.manifest('rev.json'))
    .pipe(dest(_build.root));
};

module.exports = cache;
