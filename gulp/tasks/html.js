const { src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const nunjucks = require('gulp-nunjucks-render');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const { prod, backend, _src, _dist } = require('../gulp.config')();

const htmlHandle = () => {
  return src(
    [`${_src.views}/pages/**/*.html`].concat(
      backend
        ? [
            `${_src.views}/**/*.html`,
            `!${_src.views}/macro/**/*.html`,
            `!${_src.views}/layout/**/*.html`,
          ]
        : []
    )
  )
    .pipe(
      nunjucks({
        path: [`${_src.views}`],
      })
    )
    .on(
      'error',
      notify.onError(error => {
        return {
          title: 'Nunjucks',
          message: error,
        };
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: prod,
      })
    )
    .pipe(dest(backend ? `${_dist.root}/views` : _dist.root))
    .pipe(browserSync.stream());
};

module.exports = htmlHandle;
