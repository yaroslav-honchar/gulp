const { readFileSync } = require('fs');
const { src, dest } = require('gulp');
const revRewrite = require('gulp-rev-rewrite');
const { _dist } = require('../gulp.config')();

const rewrite = () => {
  const manifest = readFileSync('build/rev.json');
  src(`${_dist.css}/*.css`)
    .pipe(
      revRewrite({
        manifest,
      })
    )
    .pipe(dest(_dist.css));
  return src(`${_dist.root}/**/*.html`)
    .pipe(
      revRewrite({
        manifest,
      })
    )
    .pipe(dest(_dist.root));
};

module.exports = rewrite;
