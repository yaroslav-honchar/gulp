const fs = require('fs');
const { src, dest, task } = require('gulp');
const revRewrite = require('gulp-rev-rewrite');

const rewrite = () => {
  const manifest = fs.readFileSync('build/rev.json');

  src("./build/css/*.css")
    .pipe(
      revRewrite({
        manifest,
      })
    )
    .pipe(dest("./build/css"));

  return src("./build/**/*.html")
    .pipe(
      revRewrite({
        manifest,
      })
    )
    .pipe(dest("./build"));
};

module.exports = () => task("rewrite", rewrite);
