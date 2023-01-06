const { readFileSync } = require('fs');
const { src, dest } = require('gulp');
const revRewrite = require('gulp-rev-rewrite');
const { _build } = require('../gulp.config')();

const rewrite = () => {
  const manifest = readFileSync('build/rev.json');
  src(`${_build.css}/*.css`)
    .pipe(
      revRewrite({
        manifest,
      })
    )
    .pipe(dest(_build.css));
  return src(`${_build.root}/**/*.html`)
    .pipe(
      revRewrite({
        manifest,
      })
    )
    .pipe(dest(_build.root));
};

module.exports = rewrite;
