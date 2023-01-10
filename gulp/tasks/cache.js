const { src, dest, task } = require('gulp');
const rev = require('gulp-rev');
const revDel = require('gulp-rev-delete-original');
const { _dist } = require('../gulp.config')();

const cache = () => {
  return src(`${_dist.root}/**/*.{css,js,svg,png,jpg,jpeg,webp,avif,woff2}`, {
    base: _dist.root,
  })
    .pipe(rev())
    .pipe(revDel())
    .pipe(dest(_dist.root))
    .pipe(rev.manifest('rev.json'))
    .pipe(dest(_dist.root));
};

module.exports = cache;
