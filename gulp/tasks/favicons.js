const { src, dest } = require('gulp');
const { _src, _dist } = require('../gulp.config')();

// TODO: Доопрацювати
const favicons = () => {
  return src(_src.favicons).pipe(dest(_dist.favicons));
};

module.exports = favicons;
